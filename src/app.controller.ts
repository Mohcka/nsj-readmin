import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): any {
    // console.log(process.env.NODE_ENV == 'production');
    return { title: 'Home', isProd: process.env.NODE_ENV == 'production' };
  }
}
