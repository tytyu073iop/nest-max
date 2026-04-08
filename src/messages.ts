import { IsNotEmpty, IsString } from "class-validator";

export class MessageToReceive {
  sender: string;
  message: string;
}

export class MessageToSend {
  @IsString()
  @IsNotEmpty()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}