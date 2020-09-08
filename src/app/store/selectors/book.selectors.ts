import {createFeatureSelector, createSelector} from '@ngrx/store';
import {bookFeatureKey, BookState} from '../reducers/book.reducer';
import {AppState} from '../reducers';
import {Book} from '../../models/book.model';

export const featureBooks = createFeatureSelector<BookState>(bookFeatureKey);
export const stateBook = createSelector(featureBooks, (state: BookState) => state);

export const bookList = (state: AppState) => state.books.list;
export const getBookList = () => createSelector(bookList, (authors: Book[]) => authors);
