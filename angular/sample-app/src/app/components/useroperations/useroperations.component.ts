import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-useroperations',
  templateUrl: './useroperations.component.html',
  styleUrls: ['./useroperations.component.css']
})
export class UseroperationsComponent {

  user=new User();
  constructor(private userService:UserService)
  {

  }

  processData(data:any)
  {
    
    this.user.name=data.value.name;
    this.user.job=data.value.job;
    this.userService.updateUserUsingPATCH(this.user, data.value.id).subscribe(

      response =>{
        console.log(response)
        alert('user information updated!!')
      },

      eresponse =>{
        alert('Failed!! Something went wrong.')
      }
    );

  }


  deleteData(data:any)
  {
    this.userService.deleteUser(data.value.id).subscribe(
      response =>{
        alert('record deleted!');
      },

      ersponse =>{
        alert('operation failed!');
      }
    );
  }
}
