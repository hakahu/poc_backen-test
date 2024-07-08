import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.interface';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() cart: Cart): Promise<Cart> {
    return this.cartService.createCart(cart);
  }

  @Get()
  async findAll(): Promise<Cart[]> {
    return this.cartService.getAllCarts();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cart> {
    return this.cartService.getCartById(id);
  }
}
