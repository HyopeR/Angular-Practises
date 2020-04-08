import { Injectable } from '@angular/core';
import {Movie} from './movie';
import { Movies } from './movie.datasource';

// Asenkron sekilde gelen verileri kontrol etmek için kullanılacak.
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(Movies);
  }
}
