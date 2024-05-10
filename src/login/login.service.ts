import { Injectable } from '@nestjs/common';
import { UserData } from './userData';

@Injectable()
export class LoginService {
    private login: UserData[] = [];

    createUserData(userData: UserData): number {
        this.login.push(userData);
        return userData.id;
    }
}
