import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FornecedorService {

  constructor(private http: Http) { }

  getFornecedor(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?id=1')
    .map(res => res.json());
  }

}
