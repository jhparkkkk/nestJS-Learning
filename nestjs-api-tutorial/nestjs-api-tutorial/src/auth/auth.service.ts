import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup() {
        return {msg:'I a am signed up'};
    }
    
    signin() {
        return {msg: 'I a am signed in'};
    }
    
}
