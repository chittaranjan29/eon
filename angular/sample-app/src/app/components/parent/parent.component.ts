import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  Counter=5;

  increment()
  {
    this.Counter++;
  }


  decrement()
  {
    this.Counter--;
  }
  
}
