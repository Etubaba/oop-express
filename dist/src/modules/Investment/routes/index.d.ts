import { Routes } from "../../../../interface/routes.interface";
import TransactionsController from "../controller";
export declare class InvestmentRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    Transact: TransactionsController;
    constructor();
    private initializeRoutes;
}
