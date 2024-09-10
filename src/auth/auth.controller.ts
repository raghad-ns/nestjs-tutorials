/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

// Controller's functionality is to handle requests and responses, and call the service that is responsible to handle the business logic
// it took the root route /auth
@Controller('auth')
export class AuthController {
    
    // To instantiate authService, this is dependency injection
    constructor(private authService: AuthService){}

    // To create an endpoint /auth/signup
    @Post('signup')
    signup() {
        return this.authService.signup()
    }

    // POST /auth/signin
    @Post('signin')
    signin(){
        return this.authService.signin()
    }
}