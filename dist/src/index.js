"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./modules/Auth/routes");
const app_1 = require("./app");
const validateEnv_1 = require("./utils/validateEnv");
// import AdminRoute from './modules/Admin/routes';
(0, validateEnv_1.ValidateEnv)();
const app = new app_1.App([new routes_1.AuthRoute()]);
app.listen();
//# sourceMappingURL=index.js.map