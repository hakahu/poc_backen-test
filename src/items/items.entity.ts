import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  incredience: { type: [String], required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  link: { type: String, required: true },
});

export default mongoose.model('Item', ItemSchema);
