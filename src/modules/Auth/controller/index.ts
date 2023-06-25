import { Request, RequestHandler, Response } from "express";
import  RegisterDto  from "../dto/register.dto";
import { Container, Service } from "typedi"
import userService from "../service";
import LoginDto from "../dto/login.dto";
import  Email from "../dto/email.dto";
import  otpDTO  from "../dto/otp.dto";

export class AuthController {


    async createUser(req: Request, res: Response) {
        const userService_ = Container.get<userService>(userService)

        try {
            const data: RegisterDto = req.body
            const { ref } = req.query
            const ref_code: string = ref + ""
            const response = await userService_.createUser(data, ref_code)
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

    async adminLogin(req: Request, res: Response) {
        const userService_ = Container.get<userService>(userService)

        try {
            const data: LoginDto = req.body
            const response = await userService_.adminLogin(data)
            res.status(200).json(response);
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
            res.status(200).json(response);
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
            const response = await userService_.verifyOTP(mail,data)
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });

        }
    }

}