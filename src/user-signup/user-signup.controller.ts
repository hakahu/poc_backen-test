import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './user-signup.service';
import { UserLoginSchema } from 'src/user-login/user.entity';

@Controller('signup')
export class SignupController {

    constructor(private userDataService: SignupService) {}

    @Post()
    async createUserData(@Body() userData: typeof UserLoginSchema): Promise<typeof UserLoginSchema> {
        console.log("Success");
        debugger;
        return this.userDataService.createUserData(userData);
    }
}
