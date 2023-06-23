"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoModule = void 0;
const typedi_1 = require("typedi");
const service_1 = require("./service");
class todoModule {
    constructor() {
        this.todoService = typedi_1.Container.get(service_1.todoService);
    }
}
exports.todoModule = todoModule;
//# sourceMappingURL=todo.module.js.map