import { Request, Response } from "express";
import { CreateAdminDto } from "../dto/create-admin.dto";
import Container from "typedi";
import adminService from "../service";

export default class AdminController {
    async createAdmin(req: Request, res: Response) {

        const adminService_=Container.get(adminService)
        try {
            const data: CreateAdminDto = req.body

            const response = await adminService_.createAdmin(data)
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
}