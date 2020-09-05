import {createFeatureSelector, createSelector} from '@ngrx/store';
import {authorFeatureKey, authorList, AuthorState} from '../reducers/author.reducer';

export const featureAuthors = createFeatureSelector<AuthorState>(authorFeatureKey);
export const stateAuthor = createSelector(featureAuthors, (state: AuthorState) => state);

export const getAuthorList = createSelector(stateAuthor, authorList);
