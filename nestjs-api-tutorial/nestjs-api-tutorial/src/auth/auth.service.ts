import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto/auth.dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
@Injectable()
export class AuthService{
    constructor( private prisma: PrismaService) {}

    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);

        // save the new user in the db
        try {
          const user = await this.prisma.user.create({
            data: {
              email: dto.email,
              hash,
            },
          });
          
          delete user.hash;
          // return the saved user
          return user;
        } catch(error) {
          if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
              throw new ForbiddenException(
                'Credentials taken',
              );
            }
          }
          throw error;
        }
    }
    
    signin() {
        return {msg: 'I a am signed in'};
    }
    
}


// to hash : argon
// yarn add argon2