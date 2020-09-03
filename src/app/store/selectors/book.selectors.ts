import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BookState} from '../reducers/book.reducer';

export const getBookStates = createFeatureSelector<BookState>('books');
