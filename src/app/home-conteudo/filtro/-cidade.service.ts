import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CidadeService {

  constructor(private http: Http) { }

  getTodasCidades() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res =>
      res.json()
    );
  }

}
