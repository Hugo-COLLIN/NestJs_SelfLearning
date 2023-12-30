import { Module } from '@nestjs/common';
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {AuthModule} from "./auth/auth.module";
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), AuthModule, PrismaModule, MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
