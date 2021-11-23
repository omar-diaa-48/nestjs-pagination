import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetPagination } from './decorators/get-pagination';
import { Pagination } from './types/pagination';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/cats')
  getCats(@GetPagination() pagination : Pagination): Pagination {
    return this.appService.getCats(pagination);
  }
}
