import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  // localhost:4200/detail/:id
  @Input() selectedMovie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.selectedMovie = movie);
  }

  save(): void {
    this.movieService.update(this.selectedMovie)
      .subscribe(() => {
        // Önceki sayfaya dönmek.
        this.location.back();
      });
  }

}
