import { Routes } from "../../../../interface/routes.interface";
import { AuthController } from "../controller";
export declare class AuthRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    Auth: AuthController;
    constructor();
    private initializeRoutes;
}
