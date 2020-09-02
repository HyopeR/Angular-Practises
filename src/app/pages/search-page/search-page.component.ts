import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  mode: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.mode = this.activatedRoute.snapshot.params.mode === 'book' ? 'book' : 'author';
  }

  ngOnInit() {
    console.log(this.activatedRoute);
  }

}
