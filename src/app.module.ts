import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbcModule } from './abc/abc.module';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [AbcModule, UsersModule, CatsModule],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
