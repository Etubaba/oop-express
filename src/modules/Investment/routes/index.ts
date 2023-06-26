import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../middleware/validation.middleware";
import TransactionsController from "../controller";
import { UpdateInvestmentOptDto } from "../dto/update-investmentOpt.dto";
import { CreateInvestmentDto } from "../dto/create-investment.dto";
import { investmentOptDto } from "../dto/investmentOpt.dto";
import { UpdateInvestmentDto } from "../dto/update-investment.dto";



export class InvestmentRoute implements Routes {
    public path = '/investment';
    public router = Router();
    public Transact = new TransactionsController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.patch(`${this.path}/update/:id/:planid`, ValidationMiddleware(UpdateInvestmentOptDto), this.Transact.updateinvestmentOpt);
        this.router.post(`${this.path}/create_plan/`, ValidationMiddleware(CreateInvestmentDto), this.Transact.create);
        this.router.post(`${this.path}/create_option/`, ValidationMiddleware(investmentOptDto), this.Transact.createPlan);
        this.router.get(`${this.path}/all/`, this.Transact.findAll);
        this.router.get(`${this.path}/:id/`, this.Transact.findOne);
        this.router.delete(`${this.path}/:id`, this.Transact.remove);
        this.router.patch(`${this.path}/plan/:id`, ValidationMiddleware(UpdateInvestmentDto), this.Transact.update);


    }
}
