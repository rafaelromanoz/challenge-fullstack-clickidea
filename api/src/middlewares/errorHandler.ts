import { Request, Response, NextFunction } from 'express';

export default (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.statusCode) {
    const { statusCode, message } = err;
    res.status(statusCode).json({ message });
    return next()
  }
  return res.status(500).json({ message: 'internal error' });
};
