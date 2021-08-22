import { Component } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular2021';
  myStatus = 'my status';
  sw=true;

  personASub:Subscription;
  video = 1;
  tictock = new BehaviorSubject(this.video);
  constructor(){

    // PERSON A
    this.personASub = this.tictock.pipe(
      filter(s => s%2 === 0)
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    // PERSON B
    this.tictock.pipe(
      delay(4000)
    ).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });
    // PERSON C
    this.tictock.subscribe(v => {
      console.log('PERSON C VIDEO', v);
    });
    
  }
  onAddVideo(){
    this.video ++
    this.tictock.next(this.video);    

  }
  person1Unsubscribe(){
    this.personASub.unsubscribe();
    console.log('PERSON A SE DESUSCRIBE')
 }
  printData(event:any){
    console.log('COMP:', event);
  }  

  test(event){
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', event);
  }
  
}