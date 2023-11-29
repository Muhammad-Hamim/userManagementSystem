import { Document, Query, Schema, model } from 'mongoose';
import { TUser, userMethods, userModel } from './user/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const userSchema = new Schema<TUser, userModel, userMethods>({
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
  isDeleted: { type: Boolean, default: false },
  orders: [
    {
      productName: {
        type: String,
        required: [true, 'productName is required'],
      },
      price: { type: Number, required: [true, 'price is required'] },
      quantity: { type: Number, required: [true, 'quantity is required'] },
    },
  ],
});

// pre save middleware
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hashing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//post save middleware / hook
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// query middleware
userSchema.pre(/^find/, function (this: Query<TUser, Document>, next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});


//create a function to check whether a user is exists or not
userSchema.methods.isUserExists = async function (id: number) {
  const existingUser = await User.findOne({ userId: id });
  return existingUser;
};
export const User = model<TUser, userModel>('user', userSchema);
