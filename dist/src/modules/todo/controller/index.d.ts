import { Request, Response } from "express";
import { todoService } from "../service";
export declare class todoController {
    todoService: todoService;
    createTodo(req: Request, res: Response): Promise<void>;
    getTodo(req: Request, res: Response): Promise<{
        message: string;
    }>;
}
