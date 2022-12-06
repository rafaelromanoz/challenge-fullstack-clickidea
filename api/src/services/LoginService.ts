import { generateToken } from "../auth/jwtConfig";
import { StatusCode } from "../http/statusCodes";
import { IRequestLogin } from "../interfaces/card-interface";
import { createErrorMessage } from "../utils/functions";

export default class LoginService {

  verifyUserAndReturnToken(body: IRequestLogin ): string | Error {
    if (body.senha === 'clk@123' && body.login === 'clickideia') {
      return generateToken({body})
    } else {
      throw createErrorMessage(StatusCode.UNAUTHORIZED, 'Usuário ou senha errado');
    }
  }
}