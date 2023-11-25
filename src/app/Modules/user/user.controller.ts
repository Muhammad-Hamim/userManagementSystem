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
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: err,
    });
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
    const userId = parseInt(req.params.id);
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
export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
