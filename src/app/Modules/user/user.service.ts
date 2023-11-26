import { User } from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser) => {
  // const result = await User.create(user);
  const user = new User(userData); // create an instance

  if (await user.isUserExists(userData.userId)) {
    throw new Error('User already exists');
  }

  const result = await user.save(); // built in instance method
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDB = async (id: number) => {
  const result = await User.findOne({ userId: id });
  if (!result) {
    throw new Error(`User with ID ${id} not found`);
  }
  return result;
};
const deleteSingleUserFromDB = async (id: number) => {
  const result = await User.deleteOne({ userId: id });
  if (!result) {
    throw new Error(`User with ID ${id} not found`);
  }
  return result;
};
export const userService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
};
