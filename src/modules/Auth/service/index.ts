import { PrismaClient, Users } from "@prisma/client";
import { RegisterDto } from "../Dto/register.dto";
import { Request, Response } from "express";
import { Service } from "typedi";
import { HttpException } from "../../../utils/HttpException";
import LoginDto from "../Dto/login.dto";
import * as argon from "argon2"

@Service()
export default class userService {
  public prisma = new PrismaClient

  public async createUser(userdata: RegisterDto) {
    console.log(userdata);

    try {
      const hashed_password = await argon.hash(userdata.password)
      const user = await this.prisma.users.create({
        data: {
          full_name: userdata.full_name,
          email: userdata.email,
          phone: userdata.phone,
          password: hashed_password,
          country: userdata.country
        },
      });
      return {
        status: true,
        message: "user created",

      }
    } catch (error) {

      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }




  public async loginUser(logindata: LoginDto) {
    try {
      let user: Users
      const checkIfEmail = logindata.emailORphone.includes("@")


      if (checkIfEmail) {
        user = await this.prisma.users.findUnique({
          where: {
            email: logindata.emailORphone
          }
          , include: {
            investments: true,
            transaction_histories: true
          }
        })
      } else {
        user = await this.prisma.users.findUnique({
          where: {
            phone: logindata.emailORphone,
          },
          include: {
            investments: true, transaction_histories: true
          }
        });
      }

      if (!user) {
        return {
          status: false,
          message: "Invalid email address or phone"
        }
      }


      const isValid = await argon.verify(user.password, logindata.password);
      if (!isValid) {
        return {
          status: false,
          message: "incorrect password"
        }
      }
      delete user?.password;
      return {
        message: 'login success',
        data: user

      }
    } catch (error) {
      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }


}
