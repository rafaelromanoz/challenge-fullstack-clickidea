import jwt, {Secret, SignOptions} from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const API_SECRET: Secret = process.env.JWT_SECRET || '';

const JWT_CONFIG: SignOptions | undefined | Buffer = {
  expiresIn: '60d',
  algorithm: 'HS256',
};
const generateToken = (payload: object) => jwt.sign({ ...payload }, API_SECRET, JWT_CONFIG);
const validateToken = (token: string) => {
  try {
    return jwt.verify(token, API_SECRET);
  } catch (error) {
    return null;
  }
};

export {
  generateToken,
  validateToken,
}
