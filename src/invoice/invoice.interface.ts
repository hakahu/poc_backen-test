import { Item } from 'src/items/items.interface';

export interface Invoice extends Document {
  invoiceId: string;
  userId: string;
  cartId: string;
  items: Item[];
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
  status: 'pending' | 'paid' | 'cancelled';
}
