import {Component} from '@angular/core';
import {Movie} from '../movie';
import { MovieService } from '../movie.service';

@Component({
  // .movies = <div class="movies"></div>
  // tslint:disable-next-line:component-selector
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css']
})

export class MoviesComponent {
  title = 'Movie List';
  movies: Movie[];
  selectedMovie: Movie;

  // Movie componentten nesne türetildiğinde costructor ilk olarak çalışır.
  constructor(private movieService: MovieService) {
  }

  // Daha sonrasında ise ngOnInıt fonksiyonu çalışır.
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  add(name, imageUrl, description): void {
    this.movieService.add({
      name,
      imageUrl,
      description
    } as Movie ).subscribe(movie => this.movies.push(movie));
  }
}
