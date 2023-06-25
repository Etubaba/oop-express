"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const service_1 = tslib_1.__importDefault(require("../service"));
class AuthController {
    async createUser(req, res) {
        const userService_ = typedi_1.Container.get(service_1.default);
        try {
            const data = req.body;
            const { ref } = req.query;
            const ref_code = ref + "";
            const response = await userService_.createUser(data, ref_code);
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async loginUser(req, res) {
        try {
            const userService_ = typedi_1.Container.get(service_1.default);
            const data = req.body;
            const response = await userService_.loginUser(data);
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async adminLogin(req, res) {
        const userService_ = typedi_1.Container.get(service_1.default);
        try {
            const data = req.body;
            const response = await userService_.adminLogin(data);
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async sendOTP(req, res) {
        const userService_ = typedi_1.Container.get(service_1.default);
        try {
            const data = req.body;
            const response = await userService_.sendOTP(data);
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async verifyOTP(req, res) {
        const userService_ = typedi_1.Container.get(service_1.default);
        try {
            const data = req.body;
            const { email } = req.query;
            const mail = email + "";
            const response = await userService_.verifyOTP(mail, data);
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
exports.AuthController = AuthController;
//# sourceMappingURL=index.js.map