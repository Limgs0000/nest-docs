import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getIndexPageMsg(): string {
    return 'indexpage~';
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  //와일드카드 사용 -> *를 이용해서 가운데 어떤 문자가 와도 상관없이 라우팅 패스를 구성하겠다는 뜻임.
  @Get('/he*lo')
  getHelloWithWildCard(): string {
    return '와일드카드';
  }

  //@Req 데코레이터를 사용해서, 쿼리스트링, ㅍ라미터, 헤더와 본문등을 알 수 있음.
  //단, nest 에서는 @Query, @Param, @Body 등의 데코레이터가 있기 때문에 이 데코레이터들을 더 사용함.
  @Get('/req')
  getRequest(@Req() req: Request): string {
    console.log(req);
    return 'req 객체 콘솔에 찍음.';
  }

  //@HttpCode 를 이용하면 특정 http 상태코드를 전송할 수 있음.
  @Get('/202')
  @HttpCode(202)
  get202(): string {
    return '202~~';
  }

  @Get('/custom-header')
  @Header('test', 'test~~')
  getHeader(): string {
    return 'header~';
  }

  @Get('/redirect')
  @Redirect('https://www.naver.com')
  getRedirect(@Query('type') type) {
    if (type === '1') {
      return { url: 'https://www.daum.net' };
    }
  }

  @Delete('/:userId/memo/:memoId')
  deleteUserMemo(
    @Param('userId') userId: string,
    @Param('memoId') memoId: string,
  ): string {
    return '메모삭제~';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    if (+id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 함.');
    }
    return '정상~';
  }
}
