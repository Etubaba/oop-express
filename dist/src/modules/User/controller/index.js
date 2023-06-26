"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const service_1 = tslib_1.__importDefault(require("../service"));
class UserController {
    async creatuser_transation(req, res) {
        const userService_ = typedi_1.default.get(service_1.default);
        try {
            const data = req.body;
            const response = await userService_.creatuser_transation(data);
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
        const userService_ = typedi_1.default.get(service_1.default);
        try {
            const data = req.params;
            const userid = data + "";
            const response = await userService_.findOne(userid);
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
        const userService_ = typedi_1.default.get(service_1.default);
        try {
            const response = await userService_.findAll();
            res.status(response.status_code).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async deleteUser(req, res) {
        const userService_ = typedi_1.default.get(service_1.default);
        try {
            const data = req.params;
            const userid = data + "";
            const response = await userService_.deleteUser(userid);
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
        const userService_ = typedi_1.default.get(service_1.default);
        try {
            const data = req.params;
            const updatedata = req.body;
            const userid = data + "";
            const response = await userService_.update(userid, updatedata);
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
exports.default = UserController;
//# sourceMappingURL=index.js.map