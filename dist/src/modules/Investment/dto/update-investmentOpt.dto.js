"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInvestmentOptDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const investmentOpt_dto_1 = require("./investmentOpt.dto");
class UpdateInvestmentOptDto extends investmentOpt_dto_1.investmentOptDto {
}
exports.UpdateInvestmentOptDto = UpdateInvestmentOptDto;
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateInvestmentOptDto.prototype, "completed", void 0);
//# sourceMappingURL=update-investmentOpt.dto.js.map