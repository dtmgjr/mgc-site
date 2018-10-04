import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PromocoesService {

  public test: any;

  constructor(private http: Http) { }

  getConteudo(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/?albumId=1')
      .map(res => res.json());
  }

  getConteudoId(id): Observable<any> {

    return this.http.get('https://jsonplaceholder.typicode.com/photos?id=' + id)
      .map(res => {
        res.json();
      }
    );
  }
}
