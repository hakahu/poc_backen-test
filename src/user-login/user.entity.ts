import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserLoginSchema = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  password: string;
}

export const UserLoginSchema = SchemaFactory.createForClass(User);