import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

// For RxJS >6.0.0
export class ProductService {

    private _productUrl = 'https://ngapi4.herokuapp.com/api/getProducts';

    constructor(private _http: Http) {}

    private extractData(res: Response) {
        return res.json();
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .pipe(map(this.extractData));
    }

    /*getProducts(): Promise<IProduct[]> {
        return this._http.get(this._productUrl).toPromise().then(res => res.json());
    }*/
}


/*
rxjs

Promises=> .then, .success
Observable=> Subscribe

//For RXJS 5.5
export class ProductService {

    private _productUrl = 'https://ngapi4.herokuapp.com/api/getProducts';

    constructor(private _http: Http) {}

    getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
          .map((response: Response) => response.json())
          .catch(this.handleError);
    }

    private handleError(error: Response) {
      return Observable.throw(error.statusText || 'Server error');
    }
}
*/
