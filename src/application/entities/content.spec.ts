/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notifiation content', () => {
    const content = new Content('você recebeu uma solicitação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notifiation content with less than 5 characters', () => {
    expect(() => new Content('aa')).toThrow();
  });

  it('should not be able to create a notifiation content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
