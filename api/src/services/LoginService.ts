import { generateToken } from "../auth/jwtConfig";
import { StatusCode } from "../http/statusCodes";
import { createErrorMessage } from "../utils/functions";

export default class LoginService {

  verifyUserAndReturnToken(body: any) {
    if (body.senha === 'clk@123' && body.login === 'clickidea') {
      return generateToken({body})
    } else {
      throw createErrorMessage(StatusCode.UNAUTHORIZED, 'usuário ou senha errado');
    }
  }
}