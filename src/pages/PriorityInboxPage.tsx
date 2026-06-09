import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  Alert,
  Grid
} from '@mui/material';
import NotificationCard from '../components/NotificationCard';
import { Notification, NotificationType } from '../types';

interface PriorityInboxPageProps {
  notifications: Notification[];
  limit: number;
  loading: boolean;
  error: string | null;
  onLimitChange: (limit: number) => void;
  onRefresh: () => void;
  onToggleSeen: (id: string) => void;
}

export default function PriorityInboxPage({
  notifications,
  limit,
  loading,
  error,
  onLimitChange,
  onRefresh,
  onToggleSeen
}: PriorityInboxPageProps) {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Priority Inbox
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Review the most urgent notification items first across placement, result, and event updates.
            </Typography>
          </Box>
          <Button variant="contained" onClick={onRefresh} disabled={loading}>
            Refresh inbox
          </Button>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
          <Typography>Show top</Typography>
          <Select value={limit} onChange={(event) => onLimitChange(Number(event.target.value))} size="small">
            {[5, 10, 15, 20].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <Typography color="text.secondary">priority items</Typography>
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
              <Alert severity="info">There are no priority notifications to show yet.</Alert>
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
    </Stack>
  );
}
