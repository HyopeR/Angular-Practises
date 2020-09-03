import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorState} from '../reducers/author.reducer';

export const getAuthorsState = createFeatureSelector<AuthorState>('authors');
