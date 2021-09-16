import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NormalService } from './services/normal.service';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

formReactive: FormGroup;


  name = new FormControl('');




  constructor(
    private normalService: NormalService,
    private publicationService: PublicationService,
    private formBuilder: FormBuilder,
    private authService:AuthService
  
    ){

      this.formReactive = this.formBuilder.group({
        name: ['',[Validators.required,Validators.minLength(3)]],
        lastName: ['', [Validators.required]],
        date: ''
      });

     }

  ngOnInit() {
    this.publicationService.getAll().subscribe(res=>{console.log('Response:',res)})
  }
  
submit(form:any){

  console.log("aaaaa",form);
  this.authService.login({
    email:form.value.email,
    password:form.value.password,
    returnSecureToken: true


  }).subscribe(res =>{console.log("response",res);})

}

}