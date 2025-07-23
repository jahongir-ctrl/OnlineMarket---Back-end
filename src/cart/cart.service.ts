// src/cart/cart.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  addToCart(userId: number, productId: number, quantity: number = 1) {
    return this.prisma.cartItem.upsert({
      where: {
        userId_productId: { userId, productId },
      },
      update: {
        quantity: {
          increment: quantity,
        },
      },
      create: {
        userId,
        productId,
        quantity,
      },
    });
  }

  getCart(userId: number) {
    return this.prisma.cartItem.findMany({
      where: { userId },
      include: { product: true },
    });
  }

  updateQuantity(userId: number, productId: number, quantity: number) {
    return this.prisma.cartItem.update({
      where: {
        userId_productId: { userId, productId },
      },
      data: { quantity },
    });
  }

  removeFromCart(userId: number, productId: number) {
    return this.prisma.cartItem.delete({
      where: {
        userId_productId: { userId, productId },
      },
    });
  }
}
