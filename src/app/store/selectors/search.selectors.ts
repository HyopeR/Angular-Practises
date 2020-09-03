import {createFeatureSelector, createSelector} from '@ngrx/store';
import {searchError, searchKey, searchList, searchLoading, SearchState} from '../reducers/search.reducer';

export const getSearchState = createFeatureSelector<SearchState>('authors');

export const search = createSelector(getSearchState, (state: SearchState) => state);

export const getSearchList = createSelector(search, searchList);
export const getSearchLoading = createSelector(search, searchLoading);
export const getSearchError = createSelector(search, searchError);
export const getSearchKey = createSelector(search, searchKey);
