import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../middleware/validation.middleware";
import { CreateTodoDto } from "../service/Dto/create.dto";
import { todoController } from "../controller";

export class TodoRoute implements Routes {
    public path = '/';
    public router = Router();
    public todo = new todoController()


    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.post(`${this.path}createtodo`, ValidationMiddleware(CreateTodoDto,), this.todo.createTodo);
        this.router.get(`${this.path}get_todo`,this.todo.getTodo);
    }
}
