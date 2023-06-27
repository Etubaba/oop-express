"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const service_1 = tslib_1.__importDefault(require("../service"));
class InvestmentController {
    async create(req, res) {
        const investmentService_ = typedi_1.default.get(service_1.default);
        try {
            const data = req.body;
            const response = await investmentService_.create(data);
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async findAll(req, res) {
        const investmentService_ = typedi_1.default.get(service_1.default);
        try {
            const response = await investmentService_.findAll();
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async update(req, res) {
        const investmentService_ = typedi_1.default.get(service_1.default);
        try {
            const { id: userid } = req.params;
            const data = req.body;
            const response = await investmentService_.update(data, userid);
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async remove(req, res) {
        const investmentService_ = typedi_1.default.get(service_1.default);
        try {
            const { id } = req.params;
            const response = await investmentService_.remove(id);
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async findOne(req, res) {
        const investmentService_ = typedi_1.default.get(service_1.default);
        try {
            const { id } = req.params;
            const response = await investmentService_.findOne(id);
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async updateinvestmentOpt(req, res) {
        const investmentService_ = typedi_1.default.get(service_1.default);
        try {
            const { id: user_id, planid: plan_id } = req.params;
            const data = req.body;
            const response = await investmentService_.updateinvestmentOpt(data, user_id, plan_id);
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async createPlan(req, res) {
        const investmentService_ = typedi_1.default.get(service_1.default);
        try {
            const data = req.body;
            const { id } = req.params;
            const response = await investmentService_.createPlan(id, data);
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
}
exports.default = InvestmentController;
//# sourceMappingURL=index.js.map