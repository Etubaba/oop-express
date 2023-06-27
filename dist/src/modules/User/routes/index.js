"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const validation_middleware_1 = require("../../../middleware/validation.middleware");
const controller_1 = tslib_1.__importDefault(require("../controller"));
const create_transaction_dto_1 = require("../dto/create_transaction.dto");
const update_user_dto_1 = require("../dto/update-user.dto");
class UserRoute {
    constructor() {
        this.path = '/user';
        this.router = (0, express_1.Router)();
        this.User = new controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/add_transaction`, (0, validation_middleware_1.ValidationMiddleware)(create_transaction_dto_1.CreateTrnDto), this.User.creatuser_transation);
        this.router.get(`${this.path}`, this.User.findAll);
        this.router.patch(`${this.path}/update`, (0, validation_middleware_1.ValidationMiddleware)(update_user_dto_1.UpdateUserDto), this.User.update);
        this.router.post(`${this.path}/:id`, this.User.findOne);
        this.router.delete(`${this.path}/:id`, this.User.deleteUser);
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=index.js.map