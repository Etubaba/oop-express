import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../middleware/validation.middleware";
import TransactionsController from "../controller";



export class TransactionRoute implements Routes {
    public path = '/transaction';
    public router = Router();
    public User = new TransactionsController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        // this.router.post(`${this.path}/add_transaction`, ValidationMiddleware(CreateTrnDto), this.User.creatuser_transation);


    }
}
