import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

//will call controller function
router.post('/create-user', userController.createUser);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getSingleUser);

router.delete('/:id', userController.deleteSingleUser);

export const userRoutes = router;
