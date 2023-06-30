"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const controller_1 = tslib_1.__importDefault(require("../controller"));
const create_admin_dto_1 = require("../dto/create-admin.dto");
const validation_middleware_1 = require("../../../middleware/validation.middleware");
class AdminRoute {
    constructor() {
        this.path = '/admin';
        this.router = (0, express_1.Router)();
        this.Admin = new controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/sign_up`, (0, validation_middleware_1.ValidationMiddleware)(create_admin_dto_1.CreateAdminDto), this.Admin.createAdmin);
    }
}
exports.default = AdminRoute;
//# sourceMappingURL=index.js.map