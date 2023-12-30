import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as url from 'url';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService) {
    super({
        datasources: {
          db: {
            url: configService.get<string>('DATABASE_URL'),
          },
        },
      });
  }
}
