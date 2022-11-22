import { Module } from '@nestjs/common';
import { AbcController } from './abc.controller';
import { AbcService } from './abc.service';
import { AbcService2 } from './abc.service2';

@Module({
  imports: [],
  controllers: [AbcController],
  providers: [AbcService, AbcService2],
})
export class AbcModule {}
