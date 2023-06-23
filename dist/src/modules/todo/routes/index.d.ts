import { Routes } from "../../../../interface/routes.interface";
import { todoController } from "../controller";
export declare class TodoRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    todo: todoController;
    constructor();
    private initializeRoutes;
}
