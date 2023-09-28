import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { AuthTokenComponent } from './auth-token/auth-token.component';



@NgModule({
  declarations: [

    SigninComponent,
    AuthTokenComponent
  ],
  imports: [
    CommonModule
  ],
  
})
export class AuthModule { }
