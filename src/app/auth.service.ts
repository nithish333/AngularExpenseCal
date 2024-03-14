import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface AuthResponse{
  idToken:string,
  refreshToken:string,
  expiresIn:string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  signupUser(email:string,password:string){
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDk_CSd7PROnukigy2uInPZuq6BpYd8bqU',
    {
      email:email,
    password:password,
    returnSecureToken:true
  
  })
  }
}
