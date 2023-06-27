import { Request, Response } from "express";
export default class InvestmentController {
    create(req: Request, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
    findOne(req: Request, res: Response): Promise<void>;
    updateinvestmentOpt(req: Request, res: Response): Promise<void>;
    createPlan(req: Request, res: Response): Promise<void>;
}
