/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// These are ts types that automatically generated when running the command: prisma generate, or: prisma migrate dev
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

// Service could be generated automatically using the command: 'nest g service serviceName --no-spec'

@Injectable({})
export class AuthService {
    // Prisma service is imported in auth module, and auth service has dependency injection, 
    // so it has access to prisma service once it imported in auth module
    constructor (private prismaServie: PrismaService) {}


  signup() {
    return { msg: 'Signed up seccessfully' };
  }

  signin() {
    return { msg: 'Signed in successfullu' };
  }
}
