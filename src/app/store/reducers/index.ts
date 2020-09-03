import * as fromBook from './book.reducer';
import * as fromAuthor from './author.reducer';
import * as fromSearch from './search.reducer';

import { AppState } from '../models/app-state.model';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  books: fromBook.BookState;
  authors: fromAuthor.AuthorState;
  search: fromSearch.SearchState;
}

export const reducers: ActionReducerMap<AppState> = {
  books: fromBook.BookReducer,
  authors: fromAuthor.AuthorReducer,
  search: fromSearch.SearchReducer
};
