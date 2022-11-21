import { Injectable } from '@nestjs/common';

@Injectable()
export class AbcService {
  getAbc(): string {
    return 'AbcService에서 호출: abc리턴';
  }
}
