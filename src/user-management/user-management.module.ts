import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user-management.controller'; // Importiere den Controller
import { UserSchema } from 'src/user-login/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Registriere das Mongoose-Modell
  ],
  providers: [UserManagementService],
  controllers: [UserManagementController], // Registriere den Controller
})
export class UserManagementModule {}
