import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './user-signup.service';
import { UserData } from '../user-login/user-login.interface';

@Controller('signup')
export class SignupController {
  constructor(private userDataService: SignupService) {}

  @Post()
  async createUserData(@Body() userData: UserData): Promise<UserData> {
    console.log('Try to create user data...');
    return this.userDataService.createUserData(userData);
  }
}
