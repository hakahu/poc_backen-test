import { Controller } from '@nestjs/common';
import { UserManagementService } from './user-management.service';

@Controller('user-management')
export class UserManagementController {
  constructor(private userManagementService: UserManagementService) {}
}
