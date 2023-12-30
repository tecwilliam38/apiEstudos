import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("home")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("objeto")
  getobject(): any {
    return this.appService.getObject()
  }
}
