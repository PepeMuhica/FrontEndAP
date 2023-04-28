
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../model/acercade';

@Injectable({
  providedIn: 'root'
})
export class SAcercadeService {
  acercURL = 'https://backendap3.herokuapp.com/acercademi/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Acercade[]>{
    return this.httpClient.get<Acercade[]>(this.acercURL + 'lista');
  }

  public detail(id: number): Observable<Acercade>{
    return this.httpClient.get<Acercade>(this.acercURL + `detail/${id}`);
  }

  public save(acercade: Acercade): Observable<any>{
    return this.httpClient.post<any>(this.acercURL + 'create', acercade);
  }

  public update(id: number, acercade: Acercade): Observable<any>{
    return this.httpClient.put<any>(this.acercURL + `update/${id}`, acercade);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.acercURL + `delete/${id}`);
  }
}