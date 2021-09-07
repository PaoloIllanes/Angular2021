import { Component, OnInit } from '@angular/core';
import { NormalService } from './services/normal.service';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private normalService: NormalService,
    private publicationService: PublicationService
    ) { }

  ngOnInit() {
    this.publicationService.getAll().subscribe(res=>{console.log('Response:',res)})
  }
  getData(){
    console.log(this.normalService.getData())

  }
  setData(data: number[]){
    this.normalService.setData(data);
  }
  
  create(){this.publicationService.create({nombre:"hola"}).subscribe(res =>(console.log(res)))}
  delete(){this.publicationService.delete("p002").subscribe(res =>(console.log(res)))}
  

}