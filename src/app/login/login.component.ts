import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NormalService } from './services/normal.service';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formReactive: FormGroup;


  name = new FormControl('');


  constructor(
    private normalService: NormalService,
    private publicationService: PublicationService,
    private formBuilder: FormBuilder
    ){

      this.formReactive = this.formBuilder.group({
        name: '',
        lastName: ['', [Validators.required]],
        date: ''
      });

     }

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
  

  onShow(){
    console.log(this.name.value)
  }

  onShowAll(){
    console.log('DDDDD', this.formReactive.value)
  }


}