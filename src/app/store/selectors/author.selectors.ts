import {createFeatureSelector, createSelector} from '@ngrx/store';
import {authorFeatureKey, AuthorState} from '../reducers/author.reducer';
import {AppState} from '../reducers';
import {Book} from '../../models/book.model';
import {Author} from '../../models/author.model';

export const featureAuthors = createFeatureSelector<AuthorState>(authorFeatureKey);
export const stateAuthor = createSelector(featureAuthors, (state: AuthorState) => state);

export const authorList = (state: AppState) => state.authors.list;
export const getAuthorList = () => createSelector(authorList, (authors: Author[]) => authors);

export const getAuthor = (authorId) => createSelector(
  authorList,
  (authors: Author[]) => authors.find(author => authorId === author.id));

export const booksList = (state: AppState) => state.books.list;
export const selectedAuthor = (state: AppState) => state.authors.selectedAuthor;
export const selectAuthorsBook = () => createSelector(
  booksList,
  selectedAuthor,
  (books: Book[], author: Author) => {
    return books.filter(book => book.authorId === author.id);
  });


