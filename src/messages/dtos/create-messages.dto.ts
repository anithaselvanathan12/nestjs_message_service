import { IsString } from 'class-validator';

export class CreateMessages {
  @IsString()
  content: string;
}
