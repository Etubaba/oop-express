import { Request, Response } from "express";
import { RegisterDto } from "../Dto/register.dto";
import { Container, Service } from "typedi"
import userService from "../service";
import LoginDto from "../Dto/login.dto";

export class AuthController {


    async createUser(req: Request, res: Response) {
        const userService_ = Container.get<userService>(userService)

        try {
            const data: RegisterDto = req.body
            const response = await userService_.createUser(data)
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });


        }

    }

    async loginUser(req: Request, res: Response) {
        try {
            const userService_ = Container.get<userService>(userService)
            const data: LoginDto = req.body
            const response = await userService_.loginUser(data)

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

}