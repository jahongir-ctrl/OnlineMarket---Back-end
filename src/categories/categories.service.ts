import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCategoryDto) {
    return this.prisma.category.create({ data: dto });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
