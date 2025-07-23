// users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RolesGuard } from './roles.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})], // добавь JWT модуль
  controllers: [UsersController],
  providers: [UsersService, RolesGuard],
  exports: [UsersService],
})
export class UsersModule {}
