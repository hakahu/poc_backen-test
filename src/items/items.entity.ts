import * as mongoose from 'mongoose';

export enum DishType {
  PIZZA = "Pizza",
  PASTA = "Appetizer",
  DESSERT = "Dessert",
  SIDE_DISH = "Side Dish",
  SALAD = "Salad",
  SOUP = "Soup",
  SNACK = "Snack",
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  CUSTOM = "Custom",
  BURGER = "Burger"
}

export const ItemSchema = new mongoose.Schema({
  incredience: { type: [String], required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  link: { type: String, required: true },
  dishType: { type: String, enum: Object.values(DishType), required: true }
});

export default mongoose.model('Item', ItemSchema);
