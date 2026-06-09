import { NotificationResponse, NotificationType } from './types';

const BASE_URL = 'https://4.224.186.213/evaluation-service/notifications';

export async function fetchNotifications(queryType: NotificationType | 'ALL', page = 1, limit = 50): Promise<NotificationResponse> {
  const searchParams = new URLSearchParams({
    limit: String(limit),
    page: String(page)
  });

  if (queryType !== 'ALL') {
    searchParams.set('notification_type', queryType);
  }

  const response = await fetch(`${BASE_URL}?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Notification fetch failed with status ${response.status}`);
  }

  return response.json();
}
