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
  const result = await User.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 },
  );
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const result = await User.findOne(
    { userId: userId },
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 },
  );
  if (!result) {
    throw new Error(`User with ID ${userId} not found`);
  }
  return result;
};
const deleteSingleUserFromDB = async (userId: number) => {
  const result = await User.updateOne(
    { userId: userId },
    { $set: { isDeleted: true } },
  );
  if (!result) {
    throw new Error(`User with ID ${userId} not found`);
  }
  return result;
};
const updateUserInfoInDB = async (
  userId: number,
  updatedData: Partial<TUser>,
) => {
  const result = await User.findOneAndUpdate(
    { userId: userId },
    { $set: updatedData },
    {
      new: true,
    },
  );
  if (!result) {
    throw new Error(`User with ID ${userId} not found`);
  }
  return result;
};

const createOrderToDB = async (userId: number, orderData: Partial<TUser>) => {
  const user = new User();
  if (await user.isUserExists(userId)) {
    const result = await User.findOneAndUpdate(
      { userId: userId },
      { $addToSet: { orders: orderData } },
    );

    return result;
  } else {
    throw new Error(`user does not exists with this id ${userId}`);
  }
};
const getAllOrdersFromDB = async (userId: number) => {
  const user = new User();
  if (await user.isUserExists(userId)) {
    const result = await User.findOne({ userId: userId }, { orders: 1 });
    return result;
  } else {
    throw new Error(`user does not exists with this id ${userId}`);
  }
};
const getOrdersTotalPriceFromDB = async (userId: number) => {
  const user = new User();
  if (await user.isUserExists(userId)) {
    const result = await User.aggregate([
      { $match: { userId: userId } },
      { $unwind: '$orders' },
      {
        $group: {
          _id: null,
          totalPrice: {
            $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
          },
        },
      },
    ]);
    return result;
  } else {
    throw new Error(`user does not exists with this id ${userId}`);
  }
};
export const userService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
  updateUserInfoInDB,
  createOrderToDB,
  getAllOrdersFromDB,
  getOrdersTotalPriceFromDB,
};
