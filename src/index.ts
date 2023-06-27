import { AuthRoute } from './modules/Auth/routes';
import { App } from './app';
import { ValidateEnv } from './utils/validateEnv';
import AdminRoute from './modules/Admin/routes';
import { InvestmentRoute } from './modules/Investment/routes';
import { UserRoute } from './modules/User/routes';

ValidateEnv();

const app = new App([new AuthRoute(), new AdminRoute(), new InvestmentRoute(), new UserRoute()]);

app.listen();
