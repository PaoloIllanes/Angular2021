import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'comp1-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  constructor() { }

  @Input ('status') statusTest: string='working';


 

  onClickTest(event:any){}
}