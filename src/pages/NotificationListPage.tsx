import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  Alert
} from '@mui/material';
import NotificationCard from '../components/NotificationCard';
import { Notification, NotificationType } from '../types';

interface NotificationListPageProps {
  notifications: Notification[];
  filterType: NotificationType | 'ALL';
  page: number;
  loading: boolean;
  error: string | null;
  onFilterTypeChange: (type: NotificationType | 'ALL') => void;
  onPageChange: (page: number) => void;
  onRefresh: () => void;
  onToggleSeen: (id: string) => void;
}

export default function NotificationListPage({
  notifications,
  filterType,
  page,
  loading,
  error,
  onFilterTypeChange,
  onPageChange,
  onRefresh,
  onToggleSeen
}: NotificationListPageProps) {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 3 }}> 
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              All Notifications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Filter by notification type, refresh the inbox, and mark items as seen.
            </Typography>
          </Box>
          <Button variant="contained" onClick={onRefresh} disabled={loading}>
            Refresh notifications
          </Button>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
          <Typography>Show</Typography>
          <Select
            value={filterType}
            onChange={(event) => onFilterTypeChange(event.target.value as NotificationType | 'ALL')}
            size="small"
          >
            <MenuItem value="ALL">All Types</MenuItem>
            <MenuItem value="EVENT">Event</MenuItem>
            <MenuItem value="RESULT">Result</MenuItem>
            <MenuItem value="PLACEMENT">Placement</MenuItem>
          </Select>
          <Typography sx={{ color: 'text.secondary' }}>Page</Typography>
          <Select value={page} onChange={(event) => onPageChange(Number(event.target.value))} size="small">
            {[1, 2, 3, 4].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Paper>

      {error ? <Alert severity="warning">{error}</Alert> : null}

      {loading ? (
        <Box display="flex" justifyContent="center" py={8}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {notifications.length === 0 ? (
            <Grid item xs={12}>
              <Alert severity="info">No notifications found for the selected filter.</Alert>
            </Grid>
          ) : (
            notifications.map((notification) => (
              <Grid item xs={12} md={6} key={notification._id}>
                <NotificationCard notification={notification} onToggleSeen={onToggleSeen} />
              </Grid>
            ))
          )}
        </Grid>
      )}

      <Divider />

      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
        <Typography color="text.secondary">
          Showing {notifications.length} items on page {page}.
        </Typography>
        <Stack direction="row" spacing={1}>
          {[1, 2, 3, 4].map((value) => (
            <Button key={value} variant={value === page ? 'contained' : 'outlined'} onClick={() => onPageChange(value)}>
              {value}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
