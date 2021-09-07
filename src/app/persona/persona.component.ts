import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-persona',
  template: `
  <div [style.background]="vaccined === 0 ? 'red' : 'green'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Name: {{name | uppercase}}</p>
    <p>Date: {{date | date: 'ddMMyyyy'}}</p>
	  <p>Age: {{age}}</p>
    <p>Disease: {{disease}}</p>
    <p>Vaccine type: {{vaccinetype}}</p>
    <p>Vaccined: {{vaccined}}</p>
    <p>Doses: {{doses}}</p>
	  
	  <button *ngIf="vaccined===0" 
            (click)="onVacunar()"
            [disabled]="age < 18 || disease">


      Vaccine
    </button>
  </div>
  `,
  styleUrls: ['./persona.component.css']
  //5. Mostrar la fecha de nacimiento según el formato 31/12/2021 (dia/mes/año)
 //6. Mostrar el nombre de la persona en mayúsculas
 //8. El botón de vacunar se deshabilita si la persona tiene enfermedad base (usar atributo disable)
 //10. También el botón de vaccine se deshabilita si la persona es menor de 18 años (usar disable

})
export class PersonaComponent implements OnInit {




  constructor(private publicationService: PublicationService) { }

 
  

ngOnInit(): void {
}
@Input()name: string;
  @Input() date:string;
  @Input() age : number;
  @Input() disease: boolean;
  @Input() vaccineType: string;
  @Input() vaccined: number;
  @Input() doses : number;

  
}