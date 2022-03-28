import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): object {
        return {message: 'Hello World!'};
    }

    sum(value1: number, value2: number): number {
        return Number(value1) + Number(value2);
    }
}
