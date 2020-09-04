import {createFeatureSelector, createSelector} from '@ngrx/store';
import {searchAllState, searchList, SearchState} from '../reducers/search.reducer';
import {AppState} from '../reducers';
import {Book} from '../models/book.model';
import {Author} from '../models/author.model';

export const featureSearch = createFeatureSelector<SearchState>('search');
export const stateSearch = createSelector(featureSearch, (state: SearchState) => state);

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
        return null;
    }
  });

export const getSearchState = () => createSelector(stateSearch, searchAllState);
export const getSearchList = () => createSelector(stateSearch, searchList);

// export const getSearchLoading = () => createSelector(stateSearch, searchLoading);
// export const getSearchError = () => createSelector(stateSearch, searchError);
// export const getSearchBooleanResult = () => createSelector(stateSearch, searchBooleanResult);
