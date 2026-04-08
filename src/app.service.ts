import { Injectable } from '@nestjs/common';
import { MessageToReceive, MessageToSend } from './messages';

@Injectable()
export class AppService {
  getMessages(): MessageToReceive[] {
    return [{ sender: 'Adorabat', message: 'Have a great day!' }];
  }

  sendMessage(message: MessageToSend): void {

  }
}
