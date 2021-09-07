import { Component, OnInit } from '@angular/core';
import { NormalService } from './services/normal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private normalService: NormalService) { }

  ngOnInit() {
  }
  getData(){
    console.log(this.normalService.getData())

  }
  setData(data: number[]){
    this.normalService.setData(data);
  }

}