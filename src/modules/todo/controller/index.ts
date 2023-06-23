import { Request, Response } from "express";
import { CreateTodoDto } from "../service/Dto/create.dto";
import { Container, Service } from "typedi"
import { todoService } from "../service";

export class todoController {


    async createTodo(req: Request, res: Response) {
        const todoservice = Container.get<todoService>(todoService)

        try {
            const data: CreateTodoDto = req.body
            const response = await todoservice.createTodo(data)
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });


        }

    }

    async getTodo(req: Request, res: Response) {
        const todoservice = Container.get<todoService>(todoService)
        const data = await todoservice.getTodo()

        res.status(200).json(data);
    }

}