import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginService from '../services/LoginService';


const loginService = new LoginService();

const loginController = new LoginController(loginService);

const loginRouter = Router();


loginRouter.post('/', loginController.loginController.bind(loginController));


export default loginRouter;