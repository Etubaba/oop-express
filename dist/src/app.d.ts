import 'reflect-metadata';
import express from 'express';
import { Routes } from '../interface/routes.interface';
export declare class App {
    app: express.Application;
    env: string;
    port: string | number;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): express.Application;
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeErrorHandling;
}
