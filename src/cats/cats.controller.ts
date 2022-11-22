import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';

@Controller('/cats')
export class CatsController {
  constructor( 
    private readonly catsService: CatsService
   ){}

  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }

  @Get('/one')
  findOneCat():string {
    return this.catsService.findOneCat();
  }

}