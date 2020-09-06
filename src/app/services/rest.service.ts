import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Book} from '../models/book.model';
import {Author} from '../models/author.model';
import {delay} from 'rxjs/operators';

@Injectable()
export class RestService {

  private BASE_URL = 'http://localhost:3500/';

  constructor(
    private http: HttpClient
  ) { }

  // Books
  getBooks() {
    return this.http.get<Book[]>(this.BASE_URL + 'books');
      // .pipe(
      //   delay(350)
      // );
  }

  addBook(book: Book) {
    return this.http.post(this.BASE_URL + 'books', book);
      // .pipe(
      //   delay(350)
      // );
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.BASE_URL + 'books'}/${id}`);
      // .pipe(
      //   delay(350)
      // );
  }

  // Books
  getAuthors() {
    return this.http.get<Author[]>(this.BASE_URL + 'authors');
      // .pipe(
      //   delay(350)
      // );
  }


}
