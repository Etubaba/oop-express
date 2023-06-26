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
            const params = req.params;
            const userid = params + "";
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
}
exports.default = InvestmentController;
//# sourceMappingURL=index.js.map