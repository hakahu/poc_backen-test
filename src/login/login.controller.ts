import { Body, Controller, Post } from '@nestjs/common';
import { UserData } from './userData';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private userDataService: LoginService) {
    }

    @Post()
    createUserData(@Body() userData: UserData): number {
        return this.userDataService.createUserData(userData);
    }
}
