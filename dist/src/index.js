"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./modules/todo/routes");
const app_1 = require("./app");
const validateEnv_1 = require("./utils/validateEnv");
(0, validateEnv_1.ValidateEnv)();
const app = new app_1.App([new routes_1.TodoRoute()]);
app.listen();
//# sourceMappingURL=index.js.map