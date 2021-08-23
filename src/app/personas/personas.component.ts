import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "persona",
  template: `
  <div [style.background]="vaccined === 0 ? 'red' : 'green'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Nombre: {{name | uppercase}}</p>

    <p>fecha: {{date | date: 'ddMMyyyy'}}</p>
	  <p>Edad: {{age}}</p>
    <p>Enfermedad base: {{disease}}</p>
    <p>TIpo de vacuna: {{vaccinetype}}</p>
    <p>vacunado: {{vaccined}}</p>
    <p>Dosis: {{doses}}</p>
	  
	  <button *ngIf="vaccinated===0" 
            (click)="onVacunar()"
            [disabled]="age < 18 || disease">


      Vacunar
    </button>
  </div>
  `
})
export class PersonasComponent {

  @Input()name: string;
  @Input() date:string;
  @Input() age : number;
  @Input() disease: boolean;
  @Input() vaccineType: string;
  @Input() vaccined: number;
  @Input() doses : number;
  @Output() vacunar = new EventEmitter();

  constructor() { 
   }


  onVacunar() {
    this.vacunar.emit();
  }

}