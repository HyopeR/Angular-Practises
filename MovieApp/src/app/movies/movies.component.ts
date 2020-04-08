import {Component} from '@angular/core';
import { Movies } from '../movie.datasource';

@Component({
  // .movies = <div class="movies"></div>
  // tslint:disable-next-line:component-selector
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css']
})

export class MoviesComponent {
  title = 'Movie List';
  movies = Movies;
}
