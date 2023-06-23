"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const typedi_1 = require("typedi");
const service_1 = require("../service");
class todoController {
    constructor() {
        this.todoService = typedi_1.Container.get(service_1.todoService);
    }
    async createTodo(req, res) {
        const data = req.body;
        // console.log(data);
        const response = await this.todoService.createTodo(data);
        console.log(response);
        res.status(200).json(response);
    }
    async getTodo(req, res) {
        const data = req.body;
        console.log(data);
        return await this.todoService.createTodo(data);
    }
}
exports.todoController = todoController;
//# sourceMappingURL=index.js.map