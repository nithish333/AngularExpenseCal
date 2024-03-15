import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('f') formData? : NgForm;
  isLogin = true;
  errorOccured?:string;
   authObs?:Observable<AuthResponse>;
constructor(private authService:AuthService){}
  toggleLogin(){
    this.isLogin=!this.isLogin
  }
onSubmit(f:NgForm){
  // console.log(this.formData?.value);
  if(this.isLogin){
    this.authObs=this.authService.loginUser(f.value.email,f.value.password)
  }else{
    
this.authObs=this.authService.signupUser(f.value.email,f.value.password)
  }

this.authObs.subscribe(response=>{
  console.log(response)
},err=>{
  // console.log(err.error.error.message);
  alert(err.error.error.message)
}
)
  this.formData?.reset()
}
}
