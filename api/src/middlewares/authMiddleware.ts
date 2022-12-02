import { validateToken } from "../auth/jwtConfig";
import { Request, Response, NextFunction } from "express";

type TPayload = {
    payload: {
        role: string,
        name: string;
    }
}

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) return res.status(401).json({ message: "missing auth token" });
        const payload = validateToken(authorization) as TPayload;
        if (!payload) return res.status(401).json({ message: "jwt invalid" });
        next();
    } catch (error) {
        return res.status(401).json({ message: "jwt malformed" });
    }
};