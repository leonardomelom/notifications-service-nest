/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notification-repositorie';
import { SendNotification } from './send-notification-use-case';


describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()

    const sendNotification = new SendNotification(notificationsRepository);
    const {notification} = await sendNotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    
    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0]).toEqual(notification)
  });
});
