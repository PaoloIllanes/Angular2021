import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp2-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

 myvar1 = 'Josue';
 myvar2 = 'Romero';
 test0(event){
   console.log('nombre completo:', this.myvar1+' '+this.myvar2);
  

 }

 test1(event){
   console.log(event);


 }

}