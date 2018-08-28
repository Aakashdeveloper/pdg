import {Injectable} from '@angular/core';
import { IMovies } from './product.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()

export class MoviesService {

    private _movieUrl = 'https://ngmovies.herokuapp.com/api/getMovies';

    constructor(private _httpClient: HttpClient) {}


    getMovies(): Observable<IMovies[]> {
        return this._httpClient.get<IMovies[]>(this._movieUrl);
      }
}
