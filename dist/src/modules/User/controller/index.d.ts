import { Request, Response } from "express";
export default class UserController {
    creatuser_transation(req: Request, res: Response): Promise<void>;
    findOne(req: Request, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    deleteUser(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
}
