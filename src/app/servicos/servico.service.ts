import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ServicoService {

  constructor(private http: Http) { }

  getConstrucao(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?id=1')
      .map(res => res.json());
  }

  getProjeto(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?id=2')
      .map(res => res.json());
  }

  getConsultoria(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?id=3')
      .map(res => res.json());
  }

  getGerenciamento(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?id=4')
      .map(res => res.json());
  }

  getIncorporacao(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?id=5')
      .map(res => res.json());
  }


}
