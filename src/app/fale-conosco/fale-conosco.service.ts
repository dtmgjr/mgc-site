import { Injectable } from '@angular/core';

import { Observable, } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { of } from 'rxjs/observable/of';

import { MGC_API } from '../app.api';

@Injectable()
export class FaleConoscoService {

    constructor(private http: Http, private spinnerService: Ng4LoadingSpinnerService) { }

    enviarEmail(email: any): any {
        const headers = new Headers();
        this.spinnerService.show();

        headers.append('Content-type', 'application/x-www-form-urlencoded');
        console.log('Email: ', email);

        this.http.post(`${MGC_API}/enviar`, email, {
            headers: headers
        })
            .pipe(catchError(this.handleError('enviarEmail', [])) /**/)
            .subscribe(data => { // console.log('Subscribe: ', data);
                this.spinnerService.hide();
            });

    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead



            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
