import { Request, Response } from 'express';
import { userService } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    // data validation using joi
    const { error, value: userValidatedData } =
      userValidationSchema.validate(userData);
    // will call service function to send this data
    const result = await userService.createUserIntoDB(userValidatedData);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        data: error,
      });
    }

    // send response
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        data: err,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred',
        data: err,
      });
    }
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'user data retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: err,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await userService.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'user data retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'data does not exist',
      data: err,
    });
  }
};
const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await userService.deleteSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'user data deleted successfully',
      data: result,
    });
  } catch (err) {
    // res.status(500).json({
    //   success: false,
    //   message: err.message || 'something went wrong',
    //   data: err,
    // });
    if (err instanceof Error) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        data: err,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred',
        data: err,
      });
    }
  }
};

const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const updatedData = req.body.user;
    // data validation using joi
    const { error, value: userValidatedData } =
      userValidationSchema.validate(updatedData);

    const result = await userService.updateUserInfoInDB(
      userId,
      userValidatedData,
    );
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong from joi',
        data: error,
      });
    }
    res.status(200).json({
      success: true,
      message: 'user data updated successfully',
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        data: err,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred',
        data: err,
      });
    }
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const orderData = req.body.orders;

    const result = await userService.createOrderToDB(userId, orderData);
    // Check if the update was successful
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result?.orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Unknown error occurred',
      data: err,
    });
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await userService.getAllOrdersFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'orders data retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'data does not exist',
      data: err,
    });
  }
};
const getAllOrdersPrice = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await userService.getOrdersTotalPriceFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'orders total price retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'data does not exist',
      data: err,
    });
  }
};
export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  updateUserInfo,
  createOrder,
  getAllOrders,
  getAllOrdersPrice,
};
