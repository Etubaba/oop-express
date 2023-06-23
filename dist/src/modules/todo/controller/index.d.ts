import { Request, Response } from "express";
export declare class todoController {
    createTodo(req: Request, res: Response): Promise<void>;
    getTodo(req: Request, res: Response): Promise<void>;
}
