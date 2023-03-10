/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repositorie';
import { CountRecipientNotification } from './count-recipient-notifications copy';


describe('Count recipients notification', () => {
  it('should be able to count recipients a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

    await notificationsRepository.create(makeNotification({recipientId: 'recipient-1'}))
    await notificationsRepository.create(makeNotification({recipientId: 'recipient-1'}))
    await notificationsRepository.create(makeNotification({recipientId: 'recipient-2'}))

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });


});
