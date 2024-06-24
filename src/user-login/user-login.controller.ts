import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserLoginSchema } from './user.entity';
import { LoginService } from './user-login.service';
import { UserLoginData } from './user-login.interface';

@Controller('login')
export class LoginController {

    constructor(private userDataService: LoginService) {
    }

    @Get()
    async getAllUserData(): Promise<typeof UserLoginSchema[]> {
        return this.userDataService.getAllUserData();
    }
    
    @Get('single')
    async getUserById(@Query('id') id: string): Promise<typeof UserLoginSchema> {
        return this.userDataService.getUserById(id);
    }

    @Post()
    async sendUserLoginData(@Body() itemData: UserLoginData): Promise<boolean> {
        return this.userDataService.sendUserLoginData(itemData);
    }
}
