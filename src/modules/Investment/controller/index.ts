import { Request, Response } from "express";
import Container from "typedi";
import { CreateInvestmentDto } from "../dto/create-investment.dto";
import InvestmentService from "../service";
import { UpdateInvestmentDto } from "../dto/update-investment.dto";
import { UpdateInvestmentOptDto } from "../dto/update-investmentOpt.dto";
import { investmentOptDto } from "../dto/investmentOpt.dto";

export default class InvestmentController {

    async create(req: Request, res: Response) {
        const investmentService_ = Container.get(InvestmentService)

        try {
            const data: CreateInvestmentDto = req.body
            const response = await investmentService_.create(data)
            res.status(response.status_code).json(response);

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async findAll(req: Request, res: Response) {
        const investmentService_ = Container.get(InvestmentService)

        try {
            const response = await investmentService_.findAll()
            res.status(response.status_code).json(response);

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async update(req: Request, res: Response) {
        const investmentService_ = Container.get(InvestmentService)

        try {
            const { id: userid } = req.params
            const data: UpdateInvestmentDto = req.body
            const response = await investmentService_.update(data, userid)
            res.status(response.status_code).json(response);

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async remove(req: Request, res: Response) {
        const investmentService_ = Container.get(InvestmentService)

        try {
            const { id } = req.params
            const response = await investmentService_.remove(id)
            res.status(response.status_code).json(response);

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }
    async findOne(req: Request, res: Response) {
        const investmentService_ = Container.get(InvestmentService)

        try {
            const { id } = req.params
            const response = await investmentService_.findOne(id)
            res.status(response.status_code).json(response);

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async updateinvestmentOpt(req: Request, res: Response) {
        const investmentService_ = Container.get(InvestmentService)

        try {
            const { id: user_id, planid: plan_id } = req.params
            const data: UpdateInvestmentOptDto = req.body
            const response = await investmentService_.updateinvestmentOpt(data, user_id, plan_id)
            res.status(response.status_code).json(response);

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }

    async createPlan(req: Request, res: Response) {
        const investmentService_ = Container.get(InvestmentService)

        try {
            const data: investmentOptDto = req.body
            const { id } = req.params
            const response = await investmentService_.createPlan(id, data)
            res.status(response.status_code).json(response);

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error',
                status_code: 500
            });
        }
    }



}