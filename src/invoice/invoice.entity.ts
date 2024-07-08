import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import { ItemSchema } from 'src/items/items.entity';
import { Invoice } from './invoice.interface';

export const InvoiceSchema: Schema = new mongoose.Schema({
  invoiceId: { type: String, required: true, unique: true },
  cartId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  items: { type: [ItemSchema], required: true }, // Verwende das ItemSchema als Array
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['pending', 'paid', 'cancelled'],
    default: 'pending',
  },

});

export default mongoose.model<Invoice>('Invoice', InvoiceSchema);
