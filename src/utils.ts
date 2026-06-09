import { Notification, NotificationType } from './types';

const weightMap: Record<NotificationType, number> = {
  PLACEMENT: 30,
  RESULT: 20,
  EVENT: 10
};

export function getNotificationPriority(notification: Notification): number {
  const ageMinutes = (Date.now() - new Date(notification.timestamp).getTime()) / 60000;
  const freshness = Math.max(0, 100 - ageMinutes);
  return weightMap[notification.notification_type] + freshness / 10;
}

export function sortByPriority(notifications: Notification[]): Notification[] {
  return [...notifications].sort((a, b) => {
    const before = getNotificationPriority(b);
    const after = getNotificationPriority(a);
    if (before !== after) {
      return before - after;
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
}

export function formatNotificationType(type: NotificationType): string {
  return type === 'PLACEMENT' ? 'Placement' : type === 'RESULT' ? 'Result' : 'Event';
}

export function formatTimeAgo(timestamp: string): string {
  const deltaSeconds = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
  if (deltaSeconds < 60) return 'Just now';
  if (deltaSeconds < 3600) return `${Math.floor(deltaSeconds / 60)} min ago`;
  if (deltaSeconds < 86400) return `${Math.floor(deltaSeconds / 3600)} hr ago`;
  return `${Math.floor(deltaSeconds / 86400)} days ago`;
}
