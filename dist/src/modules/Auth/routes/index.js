"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const validation_middleware_1 = require("../../../middleware/validation.middleware");
const register_dto_1 = tslib_1.__importDefault(require("@/modules/Auth/dto/register.dto"));
const controller_1 = require("../controller");
const login_dto_1 = tslib_1.__importDefault(require("../dto/login.dto"));
const otp_dto_1 = tslib_1.__importDefault(require("../dto/otp.dto"));
const email_dto_1 = tslib_1.__importDefault(require("../dto/email.dto"));
class AuthRoute {
    constructor() {
        this.path = '/auth';
        this.router = (0, express_1.Router)();
        this.Auth = new controller_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/sign_up`, (0, validation_middleware_1.ValidationMiddleware)(register_dto_1.default), this.Auth.createUser);
        this.router.post(`${this.path}/sign_in`, (0, validation_middleware_1.ValidationMiddleware)(login_dto_1.default), this.Auth.loginUser);
        this.router.post(`${this.path}/admin_signin`, (0, validation_middleware_1.ValidationMiddleware)(login_dto_1.default), this.Auth.adminLogin);
        this.router.post(`${this.path}/send_otp`, (0, validation_middleware_1.ValidationMiddleware)(email_dto_1.default), this.Auth.sendOTP);
        this.router.post(`${this.path}/verify_otp`, (0, validation_middleware_1.ValidationMiddleware)(otp_dto_1.default), this.Auth.verifyOTP);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=index.js.map