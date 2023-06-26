"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpDTO = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class otpDTO {
}
exports.otpDTO = otpDTO;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], otpDTO.prototype, "otp", void 0);
//# sourceMappingURL=otp.dto.js.map