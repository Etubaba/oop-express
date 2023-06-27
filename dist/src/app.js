"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const compression_1 = tslib_1.__importDefault(require("compression"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const config_1 = require("../config");
const error_middleware_1 = require("./middleware/error.middleware");
const client_1 = require("@prisma/client");
// import { logger, stream } from '../src/utils/logger';
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = config_1.NODE_ENV || 'development';
        this.port = config_1.PORT || 5000;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
    }
    listen() {
        const connectDB = new client_1.PrismaClient();
        this.app.listen(this.port, () => {
            connectDB.$connect().then(() => {
                console.log("🚀 Database Connected==========🔗🔗🔗🔗🔗🔗🔗🔗=======>");
                console.info(`🚀 App listening on the port ${this.port}`);
            }).catch((error) => {
                console.log(error.message);
            });
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        // this.app.use(morgan(LOG_FORMAT, { stream }));
        this.app.use((0, cors_1.default)({ origin: config_1.ORIGIN, credentials: config_1.CREDENTIALS, methods: config_1.METHODS }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.disable;
    }
    initializeRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/api/v1', route.router);
        });
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.ErrorMiddleware);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map