import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges, OnDestroy {
   
  name:any="Angular";
  prefix:any;
  userId:any;

  constructor()
  {
    this.name="";
    console.log("parent constructor called");
  }

  OnGenerateUserId(uid:any)
  {
    console.log("generating user id");
    this.userId=uid;
  }

  ngOnDestroy(): void {
    console.log("parent ngOndestroy called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent ngOnChanges called");
  }
  
  ngOnInit(): void {
    console.log("parent ngOninit called");
  }


}
