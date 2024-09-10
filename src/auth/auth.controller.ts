/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "src/dto";

// Controller's functionality is to handle requests and responses, and call the service that is responsible to handle the business logic
// it took the root route /auth
@Controller('auth')
export class AuthController {
    
    // To instantiate authService, this is dependency injection
    constructor(private authService: AuthService){}

    // To create an endpoint /auth/signup
    @Post('signup')
    async signup(@Body() dto: AuthDTO) { // DTO: Data Transfer Object
        return this.authService.signup(dto)
    }

    // POST /auth/signin
    @Post('signin')
    signin(){
        return this.authService.signin()
    }
}