import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema } from 'src/user-login/user.entity';
import * as bcrypt from 'bcrypt';
import { UserData } from 'src/user-login/user-login.interface';

@Injectable()
export class SignupService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserData>,
  ) {}

  async createUserData(userData: UserData): Promise<UserData> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltOrRounds);

    const newUser = new this.userModel({
      ...userData,
      password: hashedPassword,
    });

    return newUser.save() as unknown as Promise<UserData>;
  }
}
