import { AppService } from './app.service';
import { Controller, Get, Param, Patch, Delete, Body, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class AppController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
