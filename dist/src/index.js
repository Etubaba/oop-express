"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routes_1 = require("./modules/Auth/routes");
const app_1 = require("./app");
const validateEnv_1 = require("./utils/validateEnv");
const routes_2 = tslib_1.__importDefault(require("./modules/Admin/routes"));
(0, validateEnv_1.ValidateEnv)();
const app = new app_1.App([new routes_1.AuthRoute(), new routes_2.default()]);
app.listen();
//# sourceMappingURL=index.js.map