import {createFeatureSelector, createSelector} from '@ngrx/store';
import {authorList, AuthorState} from '../reducers/author.reducer';

export const featureAuthors = createFeatureSelector<AuthorState>('authors');
export const author = createSelector(featureAuthors, (state: AuthorState) => state);

export const getAuthorList = createSelector(author, authorList);
