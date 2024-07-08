import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  postcode: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  streetnumber: string;

  @Prop({ required: true })
  country: string;

  @Prop({ default: false })
  loggedin: boolean;

  @Prop({ default: false })
  confirmed: boolean;

  @Prop({ required: true, enum: ['user', 'admin'], default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
