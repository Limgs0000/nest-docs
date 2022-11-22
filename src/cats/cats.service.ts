import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
    findOneCat(): string {
        return 'cat1!';
    }
}