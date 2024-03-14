import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('f') formData? : NgForm;
  isLogin = true;
constructor(private authService:AuthService){}
  toggleLogin(){
    this.isLogin=!this.isLogin
  }
onSubmit(f:NgForm){
  // console.log(this.formData?.value);
this.authService.signupUser(f.value.email,f.value.password)
.subscribe(response=>console.log(response)
)
  this.formData?.reset()
}
}
