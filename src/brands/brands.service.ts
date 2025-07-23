import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrandDto } from './dto/brand.dto';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateBrandDto) {
    return this.prisma.brand.create({ data: dto });
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  remove(id: number) {
    return this.prisma.brand.delete({ where: { id } });
  }
}
