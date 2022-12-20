import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repositories';
import { PrismaService } from '../database/prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
