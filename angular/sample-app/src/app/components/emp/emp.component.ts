import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
 Counter=5;

 countChangeHandler(c:number)
 {
  this.Counter=c;
 }
}
