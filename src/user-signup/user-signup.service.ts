import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema } from 'src/user-login/user.entity';

@Injectable()
export class SignupService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<typeof UserSchema>,
    ) {}

    async createUserData(userData: typeof UserSchema): Promise<typeof UserSchema> {
        const newUser = new this.userModel(userData);
        return newUser.save();
        }
}
