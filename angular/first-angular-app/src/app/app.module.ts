import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { InlineStyleComponentComponent } from './inline-style-component/inline-style-component.component';
import { InlineTemplateComponentComponent } from './inline-template-component/inline-template-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormsModule } from '@angular/forms';

import {FormControl, FormArray, FormBuilder} from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { Route,RouterModule,Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    InlineStyleComponentComponent,
    InlineTemplateComponentComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
