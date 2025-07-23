import { Injectable } from '@nestjs/common';
import { PrismaService } from '..//prisma/prisma.service'; // Исправляем путь

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.brand.findMany();
  }

  create(name: string) {
    return this.prisma.brand.create({ data: { name } });
  }
}
