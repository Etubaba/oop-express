import { Service } from "typedi";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { HttpException } from "../../../utils/HttpException";
import { PrismaClient } from "@prisma/client";
import * as argon from "argon2"


@Service()

export default class adminService {
    public prisma = new PrismaClient

    async createAdmin(admindata: CreateAdminDto) {
        console.log(admindata);

        try {
            const hashed = await argon.hash(admindata.password)

            const admin = await this.prisma.administrators.create({
                data: {
                    email: admindata.email, name: admindata.name, password: hashed
                }
            })
            delete admin.password
            if (admin) {
                return {
                    status: true,
                    message: "admin created successfully",
                    data: admin,
                };
            }

        } catch (error) {
            throw new HttpException(500, `${error.message}`)
        } finally {
            await this.prisma.$disconnect();
        }

    }

}