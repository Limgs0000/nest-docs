import { Controller, Get } from '@nestjs/common';
import { AbcService } from './abc.service';

@Controller('/abc')
export class AbcController {
  constructor(private readonly abcService: AbcService) {}

  @Get('/')
  getAbc(): string {
    const resultMessage = '/abc 라우팅~';
    return resultMessage;
  }

  @Get('/get')
  getAbcAtService(): string {
    return this.abcService.getAbc();
  }
}
