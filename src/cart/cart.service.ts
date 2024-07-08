import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.interface';

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  async createCart(cart: Cart): Promise<Cart> {
    const newCart = new this.cartModel(cart);
    return newCart.save();
  }

  async getAllCarts(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  async getCartById(id: string): Promise<Cart> {
    return this.cartModel.findById(id).exec();
  }
}
