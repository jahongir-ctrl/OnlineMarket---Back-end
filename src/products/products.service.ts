// product.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.product.findMany({
      include: {
        brand: true,
        category: true,
      },
    });
  }

  findByBrand(brandId: number) {
    return this.prisma.product.findMany({
      where: { brandId },
      include: { brand: true, category: true },
    });
  }

  findByCategory(categoryId: number) {
    return this.prisma.product.findMany({
      where: { categoryId },
      include: { brand: true, category: true },
    });
  }

  create(data: {
    name: string;
    description: string;
    price: number;
    brandId: number;
    categoryId: number;
    image: string;
  }) {
    return this.prisma.product.create({
      data,
    });
  }
  async update(id: number, data: {
    name?: string;
    description?: string;
    price?: number;
    brandId?: number;
    categoryId?: number;
    image?: string;
  }) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}