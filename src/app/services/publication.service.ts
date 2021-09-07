import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class PublicationService {
  urlVac = environment.app.vaccinated;
  urlUnvac = environment.app.unvaccinated;

  constructor(private http: HttpClient) { }
//CRUD vaccined
  public getVaccinated(): Observable<any>{
    return this.http.get(
      `${this.urlVac}.json`);
  }

  public createVaccinated(body: any): Observable<any>{
    return this.http.post(
      `${this.urlVac}.json`,
      body);
  }

  public updateVaccinated(id: string, body: any): Observable<any>{
    return this.http.put(
      `${this.urlVac}/${id}.json`,
      body);
  }

  public deleteVaccinated(id: string): Observable<any>{
    return this.http.delete(
      `${this.urlVac}/${id}.json`);
  }


//CRUD unvaccined

  public getUnvaccinated(): Observable<any>{
    return this.http.get(
      `${this.urlUnvac}.json`);
  }

  public createUnvaccinated(body: any): Observable<any>{
    return this.http.post(
      `${this.urlUnvac}.json`,
      body);
  }

  public updateUnvaccinated(id: string, body: any): Observable<any>{
    return this.http.put(
      `${this.urlUnvac}/${id}.json`,
      body);
  }

  public deleteUnvaccinated(id: string): Observable<any>{
    return this.http.delete(
      `${this.urlUnvac}/${id}.json`);
  }

}