import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  usersList:any;
  user:any;
  constructor(private userService:UserService)
  {

  }

  ngOnInit(): void {
    this.usersList=this.userService.getUsersInfo().subscribe(
      response =>{
        this.usersList=response.data;
      }
    );
  }

  processData(data:any)
  {
    console.log(data.value)
   this.userService.getSingleUser(data.value.userId).subscribe(

    response =>{
      this.user=response;
      console.log(this.user);
    }
   );
  }


 



}
