import { Schema, model } from 'mongoose';
import { User } from './user/user.interface';

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    required: [true, 'userId is required'],
    unique: true,
  },
  username: {
    type: String,
    trim: true,
    required: [true, 'username is required'],
    unique: true,
  },
  password: { type: String, required: [true, 'password is required'] },
  fullName: {
    firstName: { type: String, required: [true, 'firstName is required'] },
    lastName: { type: String, required: [true, 'lastName is required'] },
  },
  age: { type: Number, required: [true, 'age is required'] },
  email: { type: String, required: [true, 'email is required'], unique: true },
  isActive: { type: Boolean, required: [true, 'isActive is required'] },
  hobbies: [{ type: String, required: [true, 'hobbies are required'] }],
  address: {
    street: { type: String, required: [true, 'street is required'] },
    city: { type: String, required: [true, 'city is required'] },
    country: { type: String, required: [true, 'country is required'] },
  },
  // orders: [
  //   {
  //     productName: { type: String, required: [true, 'productName is required'] },
  //     price: { type: Number, required: [true, 'price is required'] },
  //     quantity: { type: Number, required: [true, 'quantity is required'] },
  //   },
  // ],
});

export const UserModel = model<User>('User', userSchema);
