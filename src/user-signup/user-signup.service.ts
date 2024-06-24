import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLoginSchema } from 'src/user-login/user.entity';

@Injectable()
export class SignupService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<typeof UserLoginSchema>,
    ) {}

    async createUserData(userData: typeof UserLoginSchema): Promise<typeof UserLoginSchema> {
        const newUser = new this.userModel(userData);
        return newUser.save();
        }
}
