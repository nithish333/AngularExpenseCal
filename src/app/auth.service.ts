import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface AuthResponse{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered:boolean
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  signupUser(email:string,password:string){
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDk_CSd7PROnukigy2uInPZuq6BpYd8bqU',
    {
      email:email,
    password:password,
    returnSecureToken:true
  
  })
  }

  loginUser(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDk_CSd7PROnukigy2uInPZuq6BpYd8bqU',{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
