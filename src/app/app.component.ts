import { Component } from '@angular/core';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private publicationService: PublicationService){}

//1. Listar las personas en 2 categorías vacunadas y no vacunadas (utilizar el servicio GET)
 getAllVacinated(){
   this.publicationService.getVaccinated().subscribe(s=>(console.log(s)))
 }
 getAllUnvaccinated(){
   this.publicationService.getUnvaccinated().subscribe(s=>(console.log(s)))
 }

 /*3. Mostrar un botón de vaccine solo en las personas no vacunadas que al accionar automáticamente la persona no 
 vacunada pasa al grupo de los vacunados, pero haciendo verificación previa (utilizar método DELETE para eliminar y 
 método POST para adicionar y verificar el numero de dosis que debe recibir)*/


 updateDoses(id: string){
   this.publicationService.updateUnvaccinated(id,{"age":18,
   "date":"2021-11-03T18:30:00.000Z",
   "disease":false,
   "doses":3,
   "name":"maritza",
   "vaccineType":"C",
   "vaccined":1})

 }
}


