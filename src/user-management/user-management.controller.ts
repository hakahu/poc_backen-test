import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { UserData } from 'src/user-login/user-login.interface';
import { UserManagementService } from './user-management.service';

@Controller('users')
export class UserManagementController {
  constructor(private userManagementService: UserManagementService) {}

  @Get()
  async getAllUserData(): Promise<UserData[]> {
    console.log('Try to get all users...');
    return this.userManagementService.getAllUserData();
  }

  @Get('single')
  async getUserById(@Query('id') id: string): Promise<UserData> {
    console.log('Try to get user by id: ', id, ' ...');
    return this.userManagementService.getUserById(id);
  }

  @Delete()
  async deleteUser(@Query('id') id: string): Promise<UserData> {
    console.log('Try to delete user by id: ', id, ' ...');
    return this.userManagementService.deleteUser(id);
  }

  @Patch(':id')
  async updateUser(
    @Query('id') id: string,
    @Body() updateData: Partial<UserData>,
  ): Promise<UserData> {
    console.log('Try to update user data by id:', id, 'with data:', updateData);
    return this.userManagementService.updateUser(id, updateData);
  }

  @Post('email')
  async getUserByEmail(@Query('email') email: string): Promise<UserData> {
    console.log('Try to find user by email:', email, ' ...');
    return this.userManagementService.getUserByEmail(email);
  }
}
