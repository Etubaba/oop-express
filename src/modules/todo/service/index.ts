import { PrismaClient } from "@prisma/client";
import { CreateTodoDto } from "./Dto/create.dto";
import { Request, Response } from "express";
import { Service } from "typedi";
import { HttpException } from "../../../utils/HttpException";

@Service()
export class todoService {
  public prisma = new PrismaClient

  public async createTodo(createTodo: CreateTodoDto) {

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

      }
    } catch (error) {

      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }
  public async getTodo() {

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

      }
    } catch (error) {

      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }


}
