import { Request, Response } from "express";
import Container from "typedi";
import { CreateInvestmentDto } from "../dto/create-investment.dto";
import InvestmentService from "../service";
import { UpdateInvestmentDto } from "../dto/update-investment.dto";

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
            const params = req.params
            const userid = params + ""
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


}