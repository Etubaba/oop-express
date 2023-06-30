"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInvestmentDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const create_investment_dto_1 = require("./create-investment.dto");
class UpdateInvestmentDto extends create_investment_dto_1.CreateInvestmentDto {
}
exports.UpdateInvestmentDto = UpdateInvestmentDto;
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateInvestmentDto.prototype, "status", void 0);
//# sourceMappingURL=update-investment.dto.js.map