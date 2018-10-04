import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FiltroService {

    constructor(private http: Http) { }

    getCidade(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(res => res.json());
    }

    getCategoria(): Observable<any> {
        return this.http.get('')
            .map(res => res.json());
    }


}
