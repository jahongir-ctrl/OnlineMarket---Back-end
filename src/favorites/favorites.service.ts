import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async addToFavorites(userId: number, productId: number) {
    return this.prisma.favorite.create({
      data: { userId, productId },
    });
  }

  async removeFromFavorites(userId: number, productId: number) {
    return this.prisma.favorite.deleteMany({
      where: { userId, productId },
    });
  }

  async getUserFavorites(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: { product: true },
    });
  }
}
