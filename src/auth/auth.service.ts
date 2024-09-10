/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {

    signup() {
        return {msg: "Signed up seccessfully"}
    }

    signin() {
        return {msg: "Signed in successfullu"}
    }
}
