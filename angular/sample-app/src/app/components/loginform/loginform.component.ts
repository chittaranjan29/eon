import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
 
  login:any;
  loginForm:any;
  ngOnInit(): void {
    this.login={
      email:'',
      password:''
    };
  }


  processFormData(data:any)
  {
    console.log(data.value);
  }

 


}
