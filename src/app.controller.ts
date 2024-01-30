import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // NOTE return data will be used in public/index.html if possible
    return this.appService.getHello();
  }
}
