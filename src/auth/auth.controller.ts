import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto.email, dto.password); // ✅
  }

  @Post('login')
  login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto.email, dto.password); // ✅
  }
}
