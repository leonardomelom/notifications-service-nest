/* eslint-disable prettier/prettier */
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repositorie';
import { CountRecipientNotification } from './count-recipient-notifications copy';


describe('Count recipients notification', () => {
  it('should be able to count recipients a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('nova solicitacao de amizade'),
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(notification);

    await countRecipientNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });


});
