import {createFeatureSelector, createSelector} from '@ngrx/store';
import {bookFeatureKey, bookList, BookState} from '../reducers/book.reducer';

export const featureBooks = createFeatureSelector<BookState>(bookFeatureKey);
export const stateBook = createSelector(featureBooks, (state: BookState) => state);

export const getBookList = createSelector(stateBook, bookList);
