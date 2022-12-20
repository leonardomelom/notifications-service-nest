/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notifiation', () => {
    const content = new Notification({
      content: new Content('Novo aviso sobre pagamento'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
