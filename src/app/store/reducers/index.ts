import { Action } from '@ngrx/store';

import * as fromBook from './book.reducer';
import * as fromAuthor from './author.reducer';
import * as fromSearch from './search.reducer';

import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  books: fromBook.BookState;
  authors: fromAuthor.AuthorState;
  search: fromSearch.SearchState;
}


export const reducers: ActionReducerMap<AppState, Action> = {
  [fromBook.bookFeatureKey]: fromBook.BookReducer,
  // @ts-ignore
  [fromAuthor.authorFeatureKey]: fromAuthor.AuthorReducer,
  [fromSearch.searchFeatureKey]: fromSearch.SearchReducer
};
