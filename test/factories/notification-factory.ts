/* eslint-disable prettier/prettier */
import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';

type Override = Partial<NotificationProps>
// pattern factory
export function makeNotification(override:Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('nova solicitacao de amizade'),
    recipientId: 'recipient-1',
    ...override,
  });
}
