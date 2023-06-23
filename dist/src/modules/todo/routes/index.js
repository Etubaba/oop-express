"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoute = void 0;
const express_1 = require("express");
const validation_middleware_1 = require("../../../middleware/validation.middleware");
const create_dto_1 = require("../service/Dto/create.dto");
const controller_1 = require("../controller");
class TodoRoute {
    constructor() {
        this.path = '/';
        this.router = (0, express_1.Router)();
        this.todo = new controller_1.todoController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}createtodo`, (0, validation_middleware_1.ValidationMiddleware)(create_dto_1.CreateTodoDto), this.todo.createTodo);
        this.router.get(`${this.path}get_todo`, this.todo.getTodo);
    }
}
exports.TodoRoute = TodoRoute;
//# sourceMappingURL=index.js.map