import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit, OnChanges, DoCheck, OnDestroy,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {

  @Input() name;
  constructor() { 
    console.log('construct')
  }
  ngOnInit(){console.log('on init')}
  ngOnChanges(changes:any){console.log('on changes', changes)}
  ngDoCheck(){console.log('on check')}
  ngAfterViewInit(){console.log('view init')}
  ngAfterContentInit(){console.log('content init')}
  ngAfterContentChecked(){console.log('content check')}
  ngAfterViewChecked(){console.log('view check')}
  ngOnDestroy(){console.log('on destroy')}

}