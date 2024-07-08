import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user-management.controller';
import { UserSchema } from 'src/user-login/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserManagementService],
  controllers: [UserManagementController],
  exports: [UserManagementService]
})
export class UserManagementModule {}
