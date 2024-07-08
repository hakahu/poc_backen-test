import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserLoginData } from './user-login.interface';
import { UserLoginSchema } from './user.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<typeof UserLoginSchema>,
  ) {}

  async getAllUserData(): Promise<(typeof UserLoginSchema)[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<typeof UserLoginSchema> {
    return this.userModel.findById(id).exec();
  }

  async sendUserLoginData(itemData: UserLoginData): Promise<boolean> {
    const user = (await this.userModel
      .findOne({
        $or: [{ email: itemData.email }, { userName: itemData.userName }],
      })
      .exec()) as unknown as UserLoginSchema;

    console.log(user);

    if (user) {
      const isPasswordMatching = await bcrypt.compare(
        itemData.password,
        user.password,
      );
      return isPasswordMatching;
    }

    return false;
  }
}
