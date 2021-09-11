import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class PublicationService {

url = environment.app.apiBaseURL

  constructor(private http:HttpClient) { }
 public getAll(): Observable<any>{

return this.http.get('https://angular-facebook-ill-default-rtdb.firebaseio.com/publications/p001.json');

  }
  public put(id:string, body:any): Observable<any>{

    return this.http.put('https://angular-facebook-ill-default-rtdb.firebaseio.com/publications/${id}.json',body);

  }
  public create( body:any): Observable<any>{

    return this.http.post('https://angular-facebook-ill-default-rtdb.firebaseio.com/publications/${id}.json',body);

  }
  public delete(id:string): Observable<any>{

    return this.http.delete('https://angular-facebook-ill-default-rtdb.firebaseio.com/publications/${id}.json');

  }
}
