import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchBar: string = '';
  searchOption: string = 'book';

  constructor() { }

  ngOnInit() {  }

  changeSearchOption(option) {
    this.searchOption = option;
  }

}
