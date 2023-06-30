import { Request, RequestHandler, Response } from "express";
import { RegisterDto } from "../Dto/register.dto";
import { Container, Service } from "typedi"
import userService from "../service";
import { LoginDto } from "../Dto/login.dto";
import { Email } from "../Dto/email.dto";
import { otpDTO } from "../Dto/otp.dto";
import authService from "../service";

export class AuthController {


    async createUser(req: Request, res: Response) {
        const authService_ = Container.get<authService>(authService)

        try {
            const data: RegisterDto = req.body
            const { ref } = req.query
            const ref_code: string = ref + ""
            const response = await authService_.createUser(data, ref_code)
            res.status(response.status_code).json(response);
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

            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async adminLogin(req: Request, res: Response) {
        const userService_ = Container.get<userService>(userService)

        try {
            const data: LoginDto = req.body
            const response = await userService_.adminLogin(data)
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });


        }
    }



    async sendOTP(req: Request, res: Response) {

        const userService_ = Container.get<userService>(userService)

        try {
            const data: Email = req.body
            const response = await userService_.sendOTP(data)
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });


        }
    }


    async verifyOTP(req: Request, res: Response) {

        const userService_ = Container.get<userService>(userService)

        try {
            const data: otpDTO = req.body
            const { email } = req.query
            const mail: string = email + ""
            const response = await userService_.verifyOTP(mail, data)
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });

        }
    }

}