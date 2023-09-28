import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() user:any;
  @Output() generateUserId:EventEmitter<String> = new EventEmitter();


  constructor()
  {
    this.user="";
    console.log("child constructor called");
  }

  random()
  {
    var t=new Date().getTime();
    this.generateUserId.emit(this.user + t.toString());
    console.log('child random method called');
  }

  ngOnDestroy(): void {
    console.log("child ngOndestroy called");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("chlild ngOnChanges called");
  }
  
  ngOnInit(): void {
    console.log("child ngOninit called");
  }

}
