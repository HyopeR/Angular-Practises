import {BookState} from '../reducers/book.reducer';
import {AuthorState} from '../reducers/author.reducer';
import {SearchState} from '../reducers/search.reducer';

export interface AppState {
   books: BookState;
   authors: AuthorState;
   search: SearchState;
}
