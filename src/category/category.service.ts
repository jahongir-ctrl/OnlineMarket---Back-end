import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Adjusted import path

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.category.findMany();
  }

  create(name: string) {
    return this.prisma.category.create({ data: { name } });
  }
}
