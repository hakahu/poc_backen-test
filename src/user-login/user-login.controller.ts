import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserSchema } from './user.entity';
import { LoginService } from './user-login.service';
import { UserLoginData } from './user-login.interface';

@Controller('login')
export class LoginController {

    constructor(private userDataService: LoginService) {
    }

    @Get()
    async getAllUserData(): Promise<typeof UserSchema[]> {
        return this.userDataService.getAllUserData();
    }

    @Post()
    async sendUserLoginData(@Body() itemData: UserLoginData): Promise<boolean> {
        return this.userDataService.sendUserLoginData(itemData);
    }
}
