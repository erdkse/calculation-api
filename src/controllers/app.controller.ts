import {Controller, Get, Query} from '@nestjs/common';
import {AppService} from '@services/app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): object {
        return this.appService.getHello();
    }

    @Get('sum')
    sum(
        @Query('value1') value1: number,
        @Query('value2') value2: number
    ): object {
        return {result: this.appService.sum(value1, value2)};
    }
}
