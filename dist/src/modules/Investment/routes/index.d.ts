import { Routes } from "../../../../interface/routes.interface";
import TransactionsController from "../controller";
export declare class TransactionRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    User: TransactionsController;
    constructor();
    private initializeRoutes;
}
