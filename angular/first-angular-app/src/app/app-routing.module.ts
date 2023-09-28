import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route,RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes:Routes=[
  {path:'home', component:LoginComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  
  ]
})
export class AppRoutingModule { }
