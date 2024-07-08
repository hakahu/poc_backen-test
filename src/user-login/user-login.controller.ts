import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LoginService } from './user-login.service';
import { UserData } from './user-login.interface';

@Controller('login')
export class LoginController {
  constructor(private userDataService: LoginService) {}

  @Post()
  async sendUserLoginData(@Body() itemData: UserData): Promise<boolean> {
    console.log(itemData);
    return this.userDataService.sendUserLoginData(itemData);
  }
}
