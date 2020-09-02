import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Book} from '../store/models/book.model';
import {Author} from '../store/models/author.model';
import {delay} from 'rxjs/operators';

@Injectable()
export class RestService {

  private BASE_URL = 'http://localhost:3500/';

  constructor(
    private http: HttpClient
  ) { }

  // Books
  getBooks() {
    return this.http.get<Book[]>(this.BASE_URL + 'books')
      // .pipe(
      //   delay(2000)
      // );
  }

  addBook(book: Book) {
    return this.http.post(this.BASE_URL + 'books', book);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.BASE_URL + 'books'}/${id}`);
  }

  // Books
  getAuthors() {
    return this.http.get<Author[]>(this.BASE_URL + 'authors')
      // .pipe(
      //   delay(2000)
      // );
  }


}
