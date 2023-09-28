import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-regular-emp',
  templateUrl: './regular-emp.component.html',
  styleUrls: ['./regular-emp.component.css']
})
export class RegularEmpComponent {
  @Input() count:any; 
  @Output() countChanged:EventEmitter<number>=new EventEmitter();


  increment()
  {
    this.count++;
    this.countChanged.emit(this.count);
  }   

  decrement()
  {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
