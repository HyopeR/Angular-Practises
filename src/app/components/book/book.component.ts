import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../models/book.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

}
