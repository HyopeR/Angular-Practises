import {createFeatureSelector, createSelector} from '@ngrx/store';
import {searchFeatureKey, searchList, SearchState} from '../reducers/search.reducer';
import {AppState} from '../reducers';
import {Book} from '../../models/book.model';
import {Author} from '../../models/author.model';

export const featureSearch = createFeatureSelector<SearchState>(searchFeatureKey);

export const stateSearch = createSelector(featureSearch, (state: SearchState) => state);
export const getSearchList = createSelector(stateSearch, searchList);

export const booksList = (state: AppState) => state.books.list;
export const authorsList = (state: AppState) => state.authors.list;
export const searchState = (state: AppState) => state.search;

export const searchFunction = () => createSelector(
  booksList,
  authorsList,
  searchState,
  (books: Book[], authors: Author[], search: SearchState) => {
    switch (search.searchKey) {
      case 'book':
        return books.filter((book: Book) => book.name === search.searchText);
      case 'author':
        return authors.filter((author: Author) => author.name === search.searchText);
      default:
        return [];
    }
  });
