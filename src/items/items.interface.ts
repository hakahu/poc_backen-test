import { Document } from 'mongoose';
import { DishType } from './items.entity';

export interface Item extends Document {
  incredience: string[];
  description: string;
  title: string;
  price: number;
  quantity: number;
  link: string;
  dishType: DishType;
}
