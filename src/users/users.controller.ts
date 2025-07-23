import { Controller } from '@nestjs/common';
import { UseGuards, Get } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { JwtService } from '@nestjs/jwt';


@Controller('users')
export class UsersController {}

@Controller('admin')
export class AdminController {
  constructor(private jwtService: JwtService) {}

  @UseGuards(RolesGuard)
  @Get('dashboard')
  getAdminStuff() {
    return 'This is only for admin';
  }
}