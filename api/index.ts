import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cardRoutes from './src/routes/cardRoutes';
import 'express-async-errors';
import loginRouter from './src/routes/loginRoutes';
import errorHandler from './src/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.use('/cards', cardRoutes);
app.use('/login', loginRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
