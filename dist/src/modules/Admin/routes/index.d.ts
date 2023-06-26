import { Routes } from "../../../../interface/routes.interface";
import AdminController from "../controller";
export default class AdminRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    Admin: AdminController;
    constructor();
    private initializeRoutes;
}
