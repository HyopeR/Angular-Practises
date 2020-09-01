import {BookState} from '../reducers/book.reducer';
import {AuthorState} from '../reducers/author.reducer';

export interface AppState {
  readonly books: BookState;
  readonly authors: AuthorState;
}
