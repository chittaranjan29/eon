import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ErrorComponent } from './components/error/error.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authenticationGuard } from 'src/service/authentication.guard';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { ParentComponent } from './components/parent/parent.component';
import { EmpComponent } from './components/emp/emp.component';
import { StudentsComponent } from './components/students/students.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { AdduserinfoComponent } from './components/adduserinfo/adduserinfo.component';
import { UseroperationsComponent } from './components/useroperations/useroperations.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, //localhost:4200
  {path:'home', component:HomeComponent},//localhost:4200/home
  {path:'about', component:AboutComponent},
  {path:'service', component:ServiceComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'employee/:id/:deptid',component:EmployeeComponent},
  {path:'user', component:UserComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[authenticationGuard]},
  {path:'data-binding', component:DataBindingComponent},
  {path:'two-way-data-binding', component:TwoWayDataBindingComponent},
  {path:'directives', component:DirectiveExampleComponent},
  {path:'parent', component:ParentComponent},
  {path:'emp', component:EmpComponent},
  {path:'students', component:StudentsComponent},
  {path:'registration', component:TemplateFormComponent},
  {path:'signin', component:LoginformComponent},
  {path:'reactive', component:ReactiveFormComponent},
  {path:'userlist', component:UserlistComponent},
  {path:'adduser', component:AdduserinfoComponent},
  {path:'user-operation', component:UseroperationsComponent},
  {path:'**', component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
