"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = require("express");
const validation_middleware_1 = require("../../../middleware/validation.middleware");
const controller_1 = require("../controller");
const login_dto_1 = require("../Dto/login.dto");
const otp_dto_1 = require("../Dto/otp.dto");
const email_dto_1 = require("../Dto/email.dto");
const register_dto_1 = require("../Dto/register.dto");
class AuthRoute {
    constructor() {
        this.path = '/auth';
        this.router = (0, express_1.Router)();
        this.Auth = new controller_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/sign_up`, (0, validation_middleware_1.ValidationMiddleware)(register_dto_1.RegisterDto), this.Auth.createUser);
        this.router.post(`${this.path}/sign_in`, (0, validation_middleware_1.ValidationMiddleware)(login_dto_1.LoginDto), this.Auth.loginUser);
        this.router.post(`${this.path}/admin_signin`, (0, validation_middleware_1.ValidationMiddleware)(login_dto_1.LoginDto), this.Auth.adminLogin);
        this.router.post(`${this.path}/send_otp`, (0, validation_middleware_1.ValidationMiddleware)(email_dto_1.Email), this.Auth.sendOTP);
        this.router.post(`${this.path}/verify_otp`, (0, validation_middleware_1.ValidationMiddleware)(otp_dto_1.otpDTO), this.Auth.verifyOTP);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=index.js.map