import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import AdminController from "../controller";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { ValidationMiddleware } from "@/middleware/validation.middleware";

export default class AdminRoute implements Routes {
    public path = '/admin';
    public router = Router();
    public Admin = new AdminController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.post(`${this.path}/sign_up`, ValidationMiddleware(CreateAdminDto,), this.Admin.createAdmin);

    }

} 