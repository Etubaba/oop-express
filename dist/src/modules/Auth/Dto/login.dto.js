"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => String(value).toLowerCase()),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "emailORphone", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
//# sourceMappingURL=login.dto.js.map