/* eslint-disable prettier/prettier */
import { NotificationsRepository } from '@application/repositories/notifications-repositories';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface unreadNotificationRequest {
  notificationId: string;
}

type unreadNotificationResponse = void

@Injectable()
export class UnreadNotification {
constructor(
  private notificationsRepository: NotificationsRepository
) {}

  async execute(request: unreadNotificationRequest): Promise<unreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if(!notification) {
      throw new NotificationNotFound
  }

  notification.unread()

  await this.notificationsRepository.save(notification);
}
}