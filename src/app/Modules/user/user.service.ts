import { UserModel } from '../user.model';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (id: number) => {
  const result = await UserModel.findOne({ userId: id });
  if (!result) {
    throw new Error(`User with ID ${id} not found`);
  }
  return result;
};
const deleteSingleUserFromDB = async (id: number) => {
  const result = await UserModel.deleteOne({ userId: id });
  return result;
};
export const userService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
};
