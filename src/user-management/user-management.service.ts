import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData } from 'src/user-login/user-login.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserManagementService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserData>,
  ) {}

  async getAllUserData(): Promise<UserData[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<UserData> {
    return this.userModel.findById(id).exec();
  }

  async deleteUser(id: string): Promise<UserData> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async updateUser(
    id: string,
    updateData: Partial<UserData>,
  ): Promise<UserData> {
    if (updateData.password) {
      const hashedPassword = await bcrypt.hash(updateData.password, 10);
      updateData.password = hashedPassword;
    }
    return this.userModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async getUserByEmail(email: string): Promise<UserData> {
    return this.userModel.findOne({ email }).exec();
  }
}
