import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { ErrorComponent } from './components/error/error.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { EmpComponent } from './components/emp/emp.component';
import { RegularEmpComponent } from './components/emp/regular-emp/regular-emp.component';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RandomComponent } from './components/user-details/random/random.component';
import { StudentsComponent } from './components/students/students.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import {HttpClientModule} from '@angular/common/http';
import { AdduserinfoComponent } from './components/adduserinfo/adduserinfo.component';
import { UseroperationsComponent } from './components/useroperations/useroperations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    ErrorComponent,
    EmployeeComponent,
    UserComponent,
    DashboardComponent,
    LoginComponent,
    DataBindingComponent,
    TwoWayDataBindingComponent,
    DirectiveExampleComponent,
    ParentComponent,
    ChildComponent,
    EmpComponent,
    RegularEmpComponent,
    UserDetailsComponent,
    RandomComponent,
    StudentsComponent,
    TemplateFormComponent,
    LoginformComponent,
    ReactiveFormComponent,
    UserlistComponent,
    AdduserinfoComponent,
    UseroperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
