import { Injectable } from '@nestjs/common';
import { UserSchema } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LoginService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<typeof UserSchema>,
    ) {}

    async getAllUserData(): Promise<typeof UserSchema[]> {
        return this.userModel.find().exec();
    }
}
