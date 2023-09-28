import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {


  a:any="";
  clearValue()
  {
    this.a="";
  }

  value="";
  processInput(event:any)
  {
    console.log(event);
    this.value=(event.target as HTMLInputElement).value;
  }

  value1="";
  handleInput(e:any)
  {
   
    this.value1=e.value;
  }

}
