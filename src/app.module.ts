import { Module } from '@nestjs/common';
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {AuthModule} from "./auth/auth.module";
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
