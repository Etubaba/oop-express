"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
const HttpException_1 = require("../../../utils/HttpException");
let todoService = exports.todoService = class todoService {
    constructor() {
        this.prisma = new client_1.PrismaClient;
    }
    async createTodo(createTodo) {
        try {
            console.log(createTodo);
            // const todo = await this.prisma.todo.create({
            //   data: {
            //     title: createTodo.title,
            //     description: createTodo.description,
            //     status: createTodo.status,
            //   },
            // });
            return {
                message: 'success',
                data: false
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async getTodo() {
        try {
            // const todo = await this.prisma.todo.create({
            //   data: {
            //     title: createTodo.title,
            //     description: createTodo.description,
            //     status: createTodo.status,
            //   },
            // });
            return {
                message: 'successt',
                data: false
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
};
exports.todoService = todoService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], todoService);
//# sourceMappingURL=index.js.map