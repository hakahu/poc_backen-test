import { Controller, Get } from '@nestjs/common';
import { UserSchema } from './user.entity';
import { LoginService } from './user-login.service';

@Controller('login')
export class LoginController {

    constructor(private userDataService: LoginService) {
    }

    @Get()
    async getAllUserData(): Promise<typeof UserSchema[]> {
        return this.userDataService.getAllUserData();
    }
}
