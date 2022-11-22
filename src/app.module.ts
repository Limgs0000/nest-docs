import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbcModule } from './abc/abc.module';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { EmailService } from './email/email.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import emailConfig from './config/emailConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
    }),
    AbcModule,
    UsersModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [ConfigService, AppService, EmailService],
})
export class AppModule {}
