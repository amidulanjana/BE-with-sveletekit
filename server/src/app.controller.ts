import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/user")
  getUser(): string {
    return this.appService.getHello();
  }

  @Get("/users")
  getHello(): string {
    return this.appService.getHello();
  }
}
