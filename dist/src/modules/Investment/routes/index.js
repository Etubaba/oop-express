"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentRoute = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const validation_middleware_1 = require("../../../middleware/validation.middleware");
const controller_1 = tslib_1.__importDefault(require("../controller"));
const update_investmentOpt_dto_1 = require("../dto/update-investmentOpt.dto");
const create_investment_dto_1 = require("../dto/create-investment.dto");
const investmentOpt_dto_1 = require("../dto/investmentOpt.dto");
const update_investment_dto_1 = require("../dto/update-investment.dto");
class InvestmentRoute {
    constructor() {
        this.path = '/investment';
        this.router = (0, express_1.Router)();
        this.Transact = new controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.patch(`${this.path}/update/:id/:planid`, (0, validation_middleware_1.ValidationMiddleware)(update_investmentOpt_dto_1.UpdateInvestmentOptDto), this.Transact.updateinvestmentOpt);
        this.router.post(`${this.path}/create_plan/`, (0, validation_middleware_1.ValidationMiddleware)(create_investment_dto_1.CreateInvestmentDto), this.Transact.create);
        this.router.post(`${this.path}/create_option/:id`, (0, validation_middleware_1.ValidationMiddleware)(investmentOpt_dto_1.investmentOptDto), this.Transact.createPlan);
        this.router.get(`${this.path}/all/`, this.Transact.findAll);
        this.router.get(`${this.path}/:id/`, this.Transact.findOne);
        this.router.delete(`${this.path}/:id`, this.Transact.remove);
        this.router.patch(`${this.path}/plan/:id`, (0, validation_middleware_1.ValidationMiddleware)(update_investment_dto_1.UpdateInvestmentDto), this.Transact.update);
    }
}
exports.InvestmentRoute = InvestmentRoute;
//# sourceMappingURL=index.js.map