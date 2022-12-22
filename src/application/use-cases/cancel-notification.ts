/* eslint-disable prettier/prettier */
import { NotificationsRepository } from '@application/repositories/notifications-repositories';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void

@Injectable()
export class CancelNotification {
constructor(
  private notificationsRepository: NotificationsRepository
) {}

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if(!notification) {
      throw new NotificationNotFound
  }

  notification.cancel()

  await this.notificationsRepository.save(notification);
}
}