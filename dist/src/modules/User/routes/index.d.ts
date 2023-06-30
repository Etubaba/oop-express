import { Routes } from "../../../../interface/routes.interface";
import UserController from "../controller";
export declare class UserRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    User: UserController;
    constructor();
    private initializeRoutes;
}
