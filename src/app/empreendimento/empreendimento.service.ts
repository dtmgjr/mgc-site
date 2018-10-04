import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EmpreendimentoService {

  constructor(private http: Http) { }

  getImagens() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/?albumId=1')
      .map(res => res.json());
  }

}
