import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post('add')
  addToCart(
    @Body() body: { userId: number; productId: number; quantity?: number }
  ) {
    return this.cartService.addToCart(
      body.userId,
      body.productId,
      body.quantity || 1
    );
  }

  @Get(':userId')
  getCart(@Param('userId') userId: string) {
    return this.cartService.getCart(Number(userId));
  }

  @Patch()
  updateQuantity(
    @Body() body: { userId: number; productId: number; quantity: number }
  ) {
    return this.cartService.updateQuantity(
      body.userId,
      body.productId,
      body.quantity
    );
  }

  @Delete()
  removeFromCart(
    @Body() body: { userId: number; productId: number }
  ) {
    return this.cartService.removeFromCart(body.userId, body.productId);
  }
}
