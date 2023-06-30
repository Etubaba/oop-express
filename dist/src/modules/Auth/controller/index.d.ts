import { Request, Response } from "express";
export declare class AuthController {
    createUser(req: Request, res: Response): Promise<void>;
    loginUser(req: Request, res: Response): Promise<void>;
    adminLogin(req: Request, res: Response): Promise<void>;
    sendOTP(req: Request, res: Response): Promise<void>;
    verifyOTP(req: Request, res: Response): Promise<void>;
}
