import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TrabalheConoscoService {

  constructor(private http: Http) { }

  getTrabalheConosco(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .map(res => res.json());
  }

}
