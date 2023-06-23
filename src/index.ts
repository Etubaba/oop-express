import { TodoRoute } from './modules/todo/routes';
import { App } from './app';
import { ValidateEnv } from './utils/validateEnv';

ValidateEnv();

const app = new App([new TodoRoute()]);

app.listen();
