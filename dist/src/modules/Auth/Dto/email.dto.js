"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class Email {
}
exports.Email = Email;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], Email.prototype, "email", void 0);
//# sourceMappingURL=email.dto.js.map