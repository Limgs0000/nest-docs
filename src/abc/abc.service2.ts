import { BaseService } from "./abc.baseService";

export class AbcService2 extends BaseService{
    getHello(): string {
        return this.doSomeFuncFromA();
    }
}