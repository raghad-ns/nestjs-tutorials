/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // This module will be available for all modules in the application, without the need of importing it
@Module({
  providers: [PrismaService],
  exports: [PrismaService] // Export it, in order to enable other modules to use it
})
export class PrismaModule {}
