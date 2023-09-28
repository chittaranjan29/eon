import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId:any;
  pan:any;
  constructor(private route:ActivatedRoute)
  {
    this.userId=this.route.snapshot.queryParams['id'];
    this.pan=this.route.snapshot.queryParamMap.get('pan');
  }


}
