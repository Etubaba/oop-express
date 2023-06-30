import { Request, Response } from "express";
export default class AdminController {
    createAdmin(req: Request, res: Response): Promise<void>;
}
