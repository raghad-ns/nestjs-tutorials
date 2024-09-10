/* eslint-disable prettier/prettier */
import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
// These are ts types that automatically generated when running the command: prisma generate, or: prisma migrate dev
// import { User, Bookmark } from '@prisma/client';
import { AuthDTO } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

// Service could be generated automatically using the command: 'nest g service serviceName --no-spec'

@Injectable({})
export class AuthService {
  // Prisma service is imported in auth module, and auth service has dependency injection,
  // so it has access to prisma service once it imported in auth module
  constructor(
    private prismaServie: PrismaService,
    private prisma: PrismaService,
  ) {}

  async signup(dto: AuthDTO) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
        // Specify the fields to be included in the returned user object
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      return user;
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        // Code P2002: unique field error, prisma has specific code for each error
        if (error.code == 'P2002') {
          throw new ForbiddenException(
            'Duplicated email!',
          );
        }
      }

      throw error;
    }
  }

  signin() {
    return { msg: 'Signed in successfullu' };
  }
}
