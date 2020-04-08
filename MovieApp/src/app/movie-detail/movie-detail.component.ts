import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() selectedMovie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
