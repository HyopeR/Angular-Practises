import {createFeatureSelector, createSelector} from '@ngrx/store';
import {bookList, BookState} from '../reducers/book.reducer';

export const featureBooks = createFeatureSelector<BookState>('books');
export const book = createSelector(featureBooks, (state: BookState) => state);

export const getBookList = createSelector(book, bookList);
