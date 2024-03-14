import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CalComponent } from './cal/cal.component';
import { LoginComponent } from './login/login.component'
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
 {
    path:"cal",component:CalComponent
  },{
    path:"login",component:LoginComponent
  }, 
  {
    path:"", redirectTo:'login',pathMatch:'full'
  },
]
@NgModule({
  declarations: [
    AppComponent,
    CalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
