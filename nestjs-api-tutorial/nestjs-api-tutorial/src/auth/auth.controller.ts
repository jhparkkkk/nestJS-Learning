import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private AuthService: AuthService) {}

    @Post('signup')
    signup() {
        return this.AuthService.signup()
    }

    @Post('signin')
    signin() {
        return this.AuthService.signin()
    }
}
















// controller receives requests from internet. For instance a POST request
// asking to login as user
// To do so, auth.controller will have to instanciate auth.service
