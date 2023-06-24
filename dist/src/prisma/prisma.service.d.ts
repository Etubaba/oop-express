import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from "../../interface/module.init";
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
