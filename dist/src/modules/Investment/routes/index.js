"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRoute = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const controller_1 = tslib_1.__importDefault(require("../controller"));
class TransactionRoute {
    constructor() {
        this.path = '/transaction';
        this.router = (0, express_1.Router)();
        this.User = new controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // this.router.post(`${this.path}/add_transaction`, ValidationMiddleware(CreateTrnDto), this.User.creatuser_transation);
    }
}
exports.TransactionRoute = TransactionRoute;
//# sourceMappingURL=index.js.map