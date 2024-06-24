import { Injectable } from '@nestjs/common';
import { UserSchema } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLoginData } from './user-login.interface';

@Injectable()
export class LoginService {

    constructor(
        @InjectModel('User')
        private readonly userModel: Model<typeof UserSchema>,
    ) {}

    async getAllUserData(): Promise<typeof UserSchema[]> {
        return this.userModel.find().exec();
    }

    async sendUserLoginData(itemData: UserLoginData): Promise<boolean> {
        const user = await this.userModel.findOne({
            $or: [
                { email: itemData.email, password: itemData.password },
                { userName: itemData.userName, password: itemData.password }
            ]
        }).exec();
        
        const validUser = !!user;

        return validUser;
    }
}
