import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-adduserinfo',
  templateUrl: './adduserinfo.component.html',
  styleUrls: ['./adduserinfo.component.css']
})
export class AdduserinfoComponent {



  constructor(private userService:UserService)
  {

  }


  
  saveData(data:any)
  {
    let obj:any | undefined;
   // alert()
    
    obj={
      'name' : data.name,
      'job':data.job
    };
    console.log(data);
    this.userService.adduser(obj).subscribe(

      response =>
      {
        alert('information added')
        console.log(response);
      },

      (error) =>{
        console.log(error)
      }
    );
 
  }


}
