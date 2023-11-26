import { Model } from 'mongoose';

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  isDeleted: boolean;
  // orders: {
  //   productName: string;
  //   price: number;
  //   quantity: number;
  // }[];
};

export type userMethods = {
  isUserExists(id: number): Promise<TUser | null>;
};

export type userModel = Model<TUser, Record<string, never>, userMethods>;
