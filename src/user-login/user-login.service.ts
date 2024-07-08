import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserData } from './user-login.interface';
import { UserSchema } from './user.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserData>,
  ) {}

  async sendUserLoginData(userData: UserData): Promise<boolean> {
    const user = (await this.userModel
      .findOne({
        $or: [{ email: userData.email }, { userName: userData.userName }],
      })
      .exec()) as unknown as UserData;

    console.log(user);

    if (user) {
      const isPasswordMatching = await bcrypt.compare(
        userData.password,
        user.password,
      );
      return isPasswordMatching;
    }

    return false;
  }
}
