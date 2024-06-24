import { Module } from '@nestjs/common';
import { LoginService } from './user-login.service';
import { LoginController } from './user-login.controller';
import { UserLoginSchema } from './user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserLoginSchema }])],
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}
