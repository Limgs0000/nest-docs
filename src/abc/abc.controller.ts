import { Controller, Get } from '@nestjs/common';
import { AbcService } from './abc.service';
import { AbcService2 } from './abc.service2';

@Controller('/abc')
export class AbcController {
  constructor(
    private readonly abcService: AbcService,
    private readonly abcService2: AbcService2
  ) {}

  @Get('/')
  getAbc(): string {
    const resultMessage = '/abc 라우팅~';
    return resultMessage;
  }

  @Get('/get')
  getAbcAtService(): string {
    return this.abcService.getAbc();
  }

  @Get('/service2')
  getHelloC(): string {
    return this.abcService2.getHello();
  }
}
