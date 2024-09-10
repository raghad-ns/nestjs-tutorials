/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// Modlue could be generated using the command: 'nest g module moduleName'

@Module({
  // No need to import it, since it's global
  // imports: [PrismaModule], // To be able to access the DB
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
