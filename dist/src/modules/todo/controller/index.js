"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const typedi_1 = require("typedi");
const service_1 = require("../service");
class todoController {
    async createTodo(req, res) {
        const todoservice = typedi_1.Container.get(service_1.todoService);
        try {
            const data = req.body;
            const response = await todoservice.createTodo(data);
            res.status(200).json(response);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async getTodo(req, res) {
        const todoservice = typedi_1.Container.get(service_1.todoService);
        const data = await todoservice.getTodo();
        res.status(200).json(data);
    }
}
exports.todoController = todoController;
//# sourceMappingURL=index.js.map