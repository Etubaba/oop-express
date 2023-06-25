import { AuthRoute } from './modules/Auth/routes';
import { App } from './app';
import { ValidateEnv } from './utils/validateEnv';
import AdminRoute from './modules/Admin/routes';

ValidateEnv();

const app = new App([new AuthRoute(), new AdminRoute()]);

app.listen();
