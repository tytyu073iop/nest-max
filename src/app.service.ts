import { Injectable } from '@nestjs/common';
import { Message } from './message';

@Injectable()
export class AppService {
  getMessages(): Message[] {
    return [{sender: 'Adorabat', message: 'Have a great day!'}];
  }

  sendMessage(message: Message): void {
    
  }
}
