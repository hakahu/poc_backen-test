import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.interface';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() cart: Cart): Promise<Cart> {
    console.log('Create new Cart...');
    return this.cartService.createCart(cart);
  }

  @Get()
  async findAll(): Promise<Cart[]> {
    console.log('Try to get Carts...');
    return this.cartService.getAllCarts();
  }

  @Get('single')
  async getCartById(@Query('id') id: string): Promise<Cart> {
    console.log('Try to get Cart by id:', id);
    return this.cartService.getCartById(id);
  }

  @Delete()
  async deleteCart(@Query('id') id: string): Promise<Cart> {
    console.log('Try to delete Cart by id:', id);
    return this.cartService.deleteCart(id);
  }

  @Patch()
  async updateCart(
    @Query('id') id: string,
    @Body() updateData: Partial<Cart>,
  ): Promise<Cart> {
    console.log('Try to update Cart by id:', id, 'with data:', updateData);
    return this.cartService.updateCart(id, updateData);
  }
}
