import { Injectable } from '@nestjs/common';
import { UserLoginSchema } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLoginData } from './user-login.interface';

@Injectable()
export class LoginService {

    constructor(
        @InjectModel('User')
        private readonly userModel: Model<typeof UserLoginSchema>,
    ) {}

    async getAllUserData(): Promise<typeof UserLoginSchema[]> {
        return this.userModel.find().exec();
    }

    async getUserById(id: string): Promise<typeof UserLoginSchema> {
        return this.userModel.findById(id).exec();
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
