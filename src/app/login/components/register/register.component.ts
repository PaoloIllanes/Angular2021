import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(authService: AuthService,
    public dialogRef:MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  onRegister(form:any){
    console.log('Register',form);
    this.authService.signUp({

      email:form.value.email,
      password:form.value.password,
      returnSecureToken: true
  
  

    }).subscribe(res => {console.log("register",res);
      this.dialogRef.close();
  })

  }

}