import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../middleware/validation.middleware";
import { RegisterDto } from "../Dto/register.dto";
import { AuthController } from "../controller";
import LoginDto from "../Dto/login.dto";

export class AuthRoute implements Routes {
    public path = '/';
    public router = Router();
    public Auth = new AuthController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.post(`${this.path}sign_up`, ValidationMiddleware(RegisterDto,), this.Auth.createUser);
        this.router.post(`${this.path}sign_in`, ValidationMiddleware(LoginDto), this.Auth.loginUser);
    }
}
