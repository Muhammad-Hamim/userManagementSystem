import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/Modules/user/user.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

//application router

app.use('/api/users/', userRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};
app.get('/', getAController);

export default app;
