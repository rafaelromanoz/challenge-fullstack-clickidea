import { NextFunction, Request, Response } from "express";
import LoginService from "../services/LoginService";

export default class LoginController {
  constructor(private loginService: LoginService) { }
  
  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.loginService.verifyUserAndReturnToken(req.body);
      return res.status(200).json({token});
    } catch (error) {
      return next(error);
    }
  }
}