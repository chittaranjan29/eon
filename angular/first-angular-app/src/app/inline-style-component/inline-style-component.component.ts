import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style-component',
  templateUrl: './inline-style-component.component.html',
  styles: [ `p{ color:red; background-color:yellow; }`
  ]
})
export class InlineStyleComponentComponent {

}
