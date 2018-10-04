import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class BairroService {

  constructor(private http: Http) { }

  getBairro(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .map(res =>
      res.json()
    );
  }

}
