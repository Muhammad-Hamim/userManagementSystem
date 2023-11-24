import { Request, Response } from 'express';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // will call service function to send this data
    const result = await userService.createUserIntoDB(userData);
    // send response
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userController = {
  createUser,
};
