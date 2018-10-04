import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoriaService {

  constructor(private http: Http) { }

  getCategorias(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res =>
      res.json()
    );
  }

}
