import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cardRoutes from './src/routes/cardRoutes';
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.use('/cards', cardRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequestError':
      res.status(400).json({ message });
      break;
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
