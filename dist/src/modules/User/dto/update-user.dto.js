"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const register_dto_1 = require("../../Auth/Dto/register.dto");
class UpdateUserDto extends register_dto_1.RegisterDto {
}
exports.UpdateUserDto = UpdateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    tslib_1.__metadata("design:type", Number)
], UpdateUserDto.prototype, "deposit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    tslib_1.__metadata("design:type", Number)
], UpdateUserDto.prototype, "profits", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    tslib_1.__metadata("design:type", Number)
], UpdateUserDto.prototype, "referal_award", void 0);
//# sourceMappingURL=update-user.dto.js.map