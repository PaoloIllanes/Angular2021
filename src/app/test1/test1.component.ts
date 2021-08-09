import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'comp1-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {


  @Input ('status') statusTest: string='working';
  constructor() { }

  @Output() onSendData  new= EventEmitter(null);

  onClickTest(event:any){}
}