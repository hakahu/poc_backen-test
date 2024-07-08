import { Module } from '@nestjs/common';
import { SignupService } from './user-signup.service';
import { SignupController } from './user-signup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLoginSchema } from 'src/user-login/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserLoginSchema }]),
  ],
  providers: [SignupService],
  controllers: [SignupController],
})
export class SignupModule {}
