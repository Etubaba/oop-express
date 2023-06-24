"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const validation_middleware_1 = require("../../../middleware/validation.middleware");
const register_dto_1 = require("../Dto/register.dto");
const controller_1 = require("../controller");
const login_dto_1 = tslib_1.__importDefault(require("../Dto/login.dto"));
class AuthRoute {
    constructor() {
        this.path = '/';
        this.router = (0, express_1.Router)();
        this.Auth = new controller_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}sign_up`, (0, validation_middleware_1.ValidationMiddleware)(register_dto_1.RegisterDto), this.Auth.createUser);
        this.router.post(`${this.path}sign_in`, (0, validation_middleware_1.ValidationMiddleware)(login_dto_1.default), this.Auth.loginUser);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=index.js.map