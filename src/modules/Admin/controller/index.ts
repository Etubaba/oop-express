import { Request, Response } from "express";

export default class AdminController {
    async createAdmin(res: Response, req: Request) {
        try {

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
}