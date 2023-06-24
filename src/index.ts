import { AuthRoute } from './modules/Auth/routes';
import { App } from './app';
import { ValidateEnv } from './utils/validateEnv';

ValidateEnv();

const app = new App([new AuthRoute()]);

app.listen();
