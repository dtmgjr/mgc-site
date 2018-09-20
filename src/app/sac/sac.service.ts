import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;


@Injectable()
export class SacService {

  constructor(private http: Http) { }

  getSacInfo(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
      .map(res => res.json());
  }

}

