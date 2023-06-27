"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routes_1 = require("./modules/Auth/routes");
const app_1 = require("./app");
const validateEnv_1 = require("./utils/validateEnv");
const routes_2 = tslib_1.__importDefault(require("./modules/Admin/routes"));
const routes_3 = require("./modules/Investment/routes");
const routes_4 = require("./modules/User/routes");
(0, validateEnv_1.ValidateEnv)();
const app = new app_1.App([new routes_1.AuthRoute(), new routes_2.default(), new routes_3.InvestmentRoute(), new routes_4.UserRoute()]);
app.listen();
//# sourceMappingURL=index.js.map