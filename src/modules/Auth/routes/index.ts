import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../middleware/validation.middleware";
import { AuthController } from "../controller";
import { LoginDto } from "../Dto/login.dto";
import { otpDTO } from "../Dto/otp.dto";
import { Email } from "../Dto/email.dto";
import { RegisterDto } from "../Dto/register.dto";


export class AuthRoute implements Routes {
    public path = '/auth';
    public router = Router();
    public Auth = new AuthController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.post(`${this.path}/sign_up`, ValidationMiddleware(RegisterDto,), this.Auth.createUser);
        this.router.post(`${this.path}/sign_in`, ValidationMiddleware(LoginDto), this.Auth.loginUser);
        this.router.post(`${this.path}/admin_signin`, ValidationMiddleware(LoginDto), this.Auth.adminLogin);
        this.router.post(`${this.path}/send_otp`, ValidationMiddleware(Email), this.Auth.sendOTP);
        this.router.post(`${this.path}/verify_otp`, ValidationMiddleware(otpDTO), this.Auth.verifyOTP);
    }
}
