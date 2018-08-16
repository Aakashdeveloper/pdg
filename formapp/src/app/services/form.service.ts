import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable()

export class FormPosterService {

    constructor(private http: Http) {}

    private extractData(res: Response) {
        const body1 = res.json();
        return body1.fields || { };
    }

    postEmployee(employee: Employee): Observable<any> {
        // console.log('posting data in service', employee);
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const authToken = 'xcv';
        const options = new RequestOptions({headers: headers});

        return this.http.post('http://localhost:3100/postEmployee', body, options )
                .pipe(map(this.extractData));
    }
}
