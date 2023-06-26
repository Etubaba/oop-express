"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const service_1 = tslib_1.__importDefault(require("../service"));
class AdminController {
    async createAdmin(req, res) {
        const adminService_ = typedi_1.default.get(service_1.default);
        try {
            const data = req.body;
            const response = await adminService_.createAdmin(data);
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
}
exports.default = AdminController;
//# sourceMappingURL=index.js.map