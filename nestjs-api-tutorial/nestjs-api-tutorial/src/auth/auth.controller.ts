import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private AuthService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log({dto})
        return this.AuthService.signup(dto)
    }

    @Post('signin')
    signin() {
        return this.AuthService.signin()
    }
}


// The @Req() decorator tells NestJS that we want to access
// the Express request object within the method.

// The req parameter of type Request represents
// the Express request object. It contains information about
// the HTTP request, such as headers, query parameters, request body.















// controller receives requests from internet. For instance a POST request
// asking to login as user
// To do so, auth.controller will have to instanciate auth.service
