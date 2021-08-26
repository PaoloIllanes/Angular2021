
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
id:number=44


constructor(private router: Router){}

onGoViewFromTS():void{
  this.router.navigate(['view2',this.id]);
  };


  
  }

  
