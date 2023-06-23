import { Container } from "typedi"
import { todoService } from "./service";
export class todoModule {

    public todoService = Container.get(todoService);

}