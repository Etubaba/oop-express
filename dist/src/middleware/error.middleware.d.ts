import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@/utils/HttpException';
export declare const ErrorMiddleware: (error: HttpException, req: Request, res: Response, next: NextFunction) => void;
