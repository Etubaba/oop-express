import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../middleware/validation.middleware";
import UserController from "../controller";
import { CreateTrnDto } from "../dto/create_transaction.dto";
import { UpdateUserDto } from "../dto/update-user.dto";



export class UserRoute implements Routes {
    public path = '/user';
    public router = Router();
    public User = new UserController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.post(`${this.path}/add_transaction`, ValidationMiddleware(CreateTrnDto), this.User.creatuser_transation);
        this.router.get(`${this.path}`, this.User.findAll);
        this.router.patch(`${this.path}/update/:id`, ValidationMiddleware(UpdateUserDto), this.User.update);
        this.router.post(`${this.path}/:id`, this.User.findOne);
        this.router.delete(`${this.path}/:id`, this.User.deleteUser);

    }
}
