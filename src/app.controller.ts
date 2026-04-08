import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { Message } from './message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMessages(): Message[] {
    return this.appService.getMessages();
  }

  @Post()
  sendMessage(@Body() message: Message): void {
    this.appService.sendMessage(message);
  }
}
