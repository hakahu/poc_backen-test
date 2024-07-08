import { Module } from '@nestjs/common';
import { UserManagementService } from './user-management.service';

@Module({
  providers: [UserManagementService],
})
export class UserManagementModule {}
