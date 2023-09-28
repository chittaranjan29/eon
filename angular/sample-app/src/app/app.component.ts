import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  name:any;
  showUserDetails:any;
  btnText='Show'; 

  constructor()
  {
    this.showUserDetails=false;
    this.btnText='Show';
  }


  toggleUserDetails()
  {
    this.showUserDetails=!this.showUserDetails;
    this.btnText=this.showUserDetails?'Hide':'Show';
  }
}
