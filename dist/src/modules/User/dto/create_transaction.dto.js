"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrnDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateTrnDto {
}
exports.CreateTrnDto = CreateTrnDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateTrnDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CreateTrnDto.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateTrnDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    tslib_1.__metadata("design:type", String)
], CreateTrnDto.prototype, "method", void 0);
//# sourceMappingURL=create_transaction.dto.js.map