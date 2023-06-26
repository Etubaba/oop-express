import { Request, Response } from "express";
import { CreateTrnDto } from "../dto/create_transaction.dto";
import Container from "typedi";
import userService from "../service";
import { UpdateUserDto } from "../dto/update-user.dto";

export default class UserController {

    async creatuser_transation(req: Request, res: Response) {
        const userService_ = Container.get(userService)
        try {
            const data: CreateTrnDto = req.body
            const response = await userService_.creatuser_transation(data)
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const userService_ = Container.get(userService)
        try {
            const {id:userid} = req.params
            const response = await userService_.findOne(userid)
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async findAll(req: Request, res: Response) {
        const userService_ = Container.get(userService)
        try {
            const response = await userService_.findAll()
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async deleteUser(req: Request, res: Response) {
        const userService_ = Container.get(userService)
        try {
            const { id: userid } = req.params
            const response = await userService_.deleteUser(userid)
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }


    async update(req: Request, res: Response) {
        const userService_ = Container.get(userService)
        try {
            const { id: userid } = req.params
            const updatedata: UpdateUserDto = req.body
            const response = await userService_.update(userid, updatedata)
            res.status(response.status_code).json(response);
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
}