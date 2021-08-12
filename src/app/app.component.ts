import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular2021';
  myStatus = 'my status';

  constructor(){
  }
  printDataRicardoComp(event:any){
    console.log('Event:', event);
  }
}