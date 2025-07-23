import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { User } from '@prisma/client'; // Импортируем тип User



@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Получить всех пользователей
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Найти пользователя по ID
  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Обновить пользователя
  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Удалить пользователя
  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
