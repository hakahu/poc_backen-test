import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './user-signup.service';
import { UserLoginSchema } from 'src/user-login/user.entity';
import { UserLoginData } from 'src/user-login/user-login.interface';

@Controller('signup')
export class SignupController {

    constructor(private userDataService: SignupService) {}

    @Post()
    async createUserData(@Body() userData: UserLoginData): Promise<UserLoginData> {
        console.log("Success");
        debugger;
        return this.userDataService.createUserData(userData);
    }
}
