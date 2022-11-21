import { Module } from '@nestjs/common';
import { AbcController } from './abc.controller';
import { AbcService } from './abc.service';

@Module({
  imports: [],
  controllers: [AbcController],
  providers: [AbcService],
})
export class AbcModule {}
