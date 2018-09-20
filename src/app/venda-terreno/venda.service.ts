import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;


@Injectable()
export class VendaService {

  constructor(private http: Http) { }

  getInfoVenda(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?id=1')
      .map(res => res.json());
  }
}
