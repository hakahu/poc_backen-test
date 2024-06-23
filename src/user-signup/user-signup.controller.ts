import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './user-signup.service';
import { UserSchema } from 'src/user-login/user.entity';

@Controller('signup')
export class SignupController {

    constructor(private userDataService: SignupService) {}

    @Post()
    async createUserData(@Body() userData: typeof UserSchema): Promise<typeof UserSchema> {
        console.log("Success");
        debugger;
        return this.userDataService.createUserData(userData);
    }
}
