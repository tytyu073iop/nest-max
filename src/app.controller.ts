import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageToReceive, MessageToSend } from './messages';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getMessages(): MessageToReceive[] {
    return this.appService.getMessages();
  }

  @Post()
  sendMessage(@Body(ValidationPipe) message: MessageToSend): void {
    this.appService.sendMessage(message);
  }
}
