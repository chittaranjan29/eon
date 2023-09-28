import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(private router:Router)
 {

 }

  login(logindata:any)
  {
    let  email:any=logindata.value.email;
    let  password:any=logindata.value.password;

    if(email=="admin@gmail.com" && password=="12345")
    {
      alert('login successful!!');
      sessionStorage.setItem("status","active");
      this.router.navigate(['/dashboard']);
    }
    else if(email!="admin@gmail.com" && password!="12345")
    {
      alert('Incorrect email and password!!');
    }
    else if(email!="admin@gmail.com")
    {
      alert('Incorrect email!!');
    }
    else if(password!="12345")
    {
      alert('Incorrect password!!');
    }
    
  }
}
