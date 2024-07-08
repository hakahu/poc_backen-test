import * as mongoose from 'mongoose';
import { ItemSchema } from 'src/items/items.entity';

export const CartSchema = new mongoose.Schema({
  cartId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  items: { type: [ItemSchema], required: true },
  status: {
    type: String,
    enum: ['open', 'completed', 'cancelled'],
    default: 'open',
  },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

CartSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model('Cart', CartSchema);
