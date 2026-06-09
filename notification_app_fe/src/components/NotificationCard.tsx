import React from 'react';
import { Card, CardContent, Chip, Typography, Stack, IconButton, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Notification } from '../types';
import { formatNotificationType, formatTimeAgo } from '../utils';

interface NotificationCardProps {
  notification: Notification;
  onToggleSeen: (id: string) => void;
}

export default function NotificationCard({ notification, onToggleSeen }: NotificationCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: notification.seen ? 'divider' : 'primary.main',
        backgroundColor: notification.seen ? 'background.paper' : 'rgba(15, 122, 99, 0.08)'
      }}
    >
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="flex-start" justifyContent="space-between" spacing={2}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Chip label={formatNotificationType(notification.notification_type)} color="secondary" size="small" />
              <Typography variant="caption" color="text.secondary">
                {formatTimeAgo(notification.timestamp)}
              </Typography>
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              {notification.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {notification.body}
            </Typography>
          </Box>
          <IconButton onClick={() => onToggleSeen(notification._id)} color={notification.seen ? 'default' : 'primary'}>
            {notification.seen ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
