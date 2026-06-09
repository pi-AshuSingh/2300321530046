export type NotificationType = 'EVENT' | 'RESULT' | 'PLACEMENT';

export interface Notification {
  _id: string;
  title: string;
  body: string;
  notification_type: NotificationType;
  timestamp: string;
  seen: boolean;
}

export interface NotificationResponse {
  notifications: Notification[];
}

export interface NotificationSummary {
  type: NotificationType | 'ALL';
  count: number;
}
