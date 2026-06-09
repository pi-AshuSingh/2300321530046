import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AppBar, Box, Container, CssBaseline, Tab, Tabs, Toolbar, Typography, Chip } from '@mui/material';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import NotificationListPage from './pages/NotificationListPage';
import PriorityInboxPage from './pages/PriorityInboxPage';
import { fetchNotifications } from './api';
import { sampleNotifications } from './mockData';
import { Notification, NotificationType } from './types';
import { sortByPriority } from './utils';
import { Log } from '@logging';

function getTabIndex(pathname: string) {
  if (pathname.includes('/priority')) return 1;
  return 0;
}

export default function App() {
  const location = useLocation();
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [filterType, setFilterType] = useState<NotificationType | 'ALL'>('ALL');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [seenIds, setSeenIds] = useState<string[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>(new Date().toLocaleTimeString());

  const loadNotifications = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const typeQuery = filterType === 'ALL' ? 'ALL' : filterType;
      const response = await fetchNotifications(typeQuery, page, 50);
      setNotifications(response.notifications);
      setLastUpdated(new Date().toLocaleTimeString());
      Log('frontend', 'info', 'api', `Fetched notifications for type ${typeQuery}`);
    } catch (err) {
      Log('frontend', 'error', 'api', `Notification fetch failed: ${String(err)}`);
      setError('Unable to load live notifications. Showing sample inbox content instead.');
      setNotifications(sampleNotifications);
      setLastUpdated(new Date().toLocaleTimeString());
    } finally {
      setLoading(false);
    }
  }, [filterType, page]);

  useEffect(() => {
    Log('frontend', 'info', 'ui', 'Application initialized and loading notifications');
    loadNotifications();
  }, [loadNotifications]);

  const enrichedNotifications = useMemo(
    () =>
      notifications.map((notification) => ({
        ...notification,
        seen: seenIds.includes(notification._id) || notification.seen
      })),
    [notifications, seenIds]
  );

  const allNotifications = useMemo(
    () =>
      enrichedNotifications.filter((notification) => filterType === 'ALL' || notification.notification_type === filterType),
    [enrichedNotifications, filterType]
  );

  const priorityNotifications = useMemo(
    () => sortByPriority(enrichedNotifications).slice(0, limit),
    [enrichedNotifications, limit]
  );

  const onToggleSeen = (id: string) => {
    Log('frontend', 'info', 'ui', `Toggling seen state for notification ${id}`);
    setSeenIds((previous) =>
      previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={1}>
        <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              Notification Dashboard
            </Typography>
            <Typography variant="body2" color="inherit">
              A responsive notification inbox for placement, results, and event updates.
            </Typography>
          </Box>
          <Chip label={`Last refresh: ${lastUpdated}`} color="secondary" />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={getTabIndex(location.pathname)}>
            <Tab label="All Notifications" component={Link} to="/" />
            <Tab label="Priority Inbox" component={Link} to="/priority" />
          </Tabs>
        </Box>

        <Routes>
          <Route
            path="/"
            element={
              <NotificationListPage
                notifications={allNotifications}
                filterType={filterType}
                page={page}
                loading={loading}
                error={error}
                onFilterTypeChange={setFilterType}
                onPageChange={setPage}
                onRefresh={loadNotifications}
                onToggleSeen={onToggleSeen}
              />
            }
          />
          <Route
            path="/priority"
            element={
              <PriorityInboxPage
                notifications={priorityNotifications}
                limit={limit}
                loading={loading}
                error={error}
                onLimitChange={setLimit}
                onRefresh={loadNotifications}
                onToggleSeen={onToggleSeen}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </Box>
  );
}
