import { Component } from '@angular/core';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private publicationService: PublicationService){}


 getAllVacinated(){
   this.publicationService.getVaccinated().subscribe(s=>(console.log(s)))
 }
}
