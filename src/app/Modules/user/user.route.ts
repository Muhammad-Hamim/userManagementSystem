import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

//will call controller function
router.post('/create-user', userController.createUser);

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getSingleUser);

router.delete('/:userId', userController.deleteSingleUser);

router.put('/:userId', userController.updateUserInfo);

router.put('/:userId/orders', userController.createOrder);

export const userRoutes = router;
