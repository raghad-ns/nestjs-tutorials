/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

// Database connection logic will be allocated at this service
// Injectable decorater means that this service uses dependency injection
@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    // url: process.env.DATABASE_URL
                    url: config.get('DATABASE_URL') // using nestjs config module
                }
            }
        })
    }
}
