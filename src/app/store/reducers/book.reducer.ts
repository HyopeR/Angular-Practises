import {Book} from '../models/book.model';
import {Action, createReducer, on} from '@ngrx/store';
import {BookActions} from '../actions';

export const bookFeatureKey = 'books';

export interface BookState {
  list: Book[];
  selectedBook: Book;
  selected: boolean;
  loading: boolean;
  loaded: boolean;
  error: Error;
}

const initialState: BookState = {
  list: [],
  selectedBook: {},
  selected: false,
  loading: false,
  loaded: false,
  error: undefined
};

const Reducer = createReducer(
  initialState,
  on(BookActions.GetBooksAction, (state) => ({
    ...state,
    loading: true
  })),

  on(BookActions.GetBooksSuccessAction, (state, { books }) => ({
    ...state,
    list: books,
    loading: false,
    loaded: true
  })),

  on(BookActions.GetBooksFailureAction, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
    loading: false,
    loaded: false
  })),

  on(BookActions.AddBookAction, (state, { payload }) => ({
    ...state,
    loading: true
  })),

  on(BookActions.AddBookSuccessAction, (state, { payload }) => ({
    ...state,
    list: [...state.list, payload],
    loading: false
  })),

  on(BookActions.AddBookFailureAction, (state, { errorMsg}) => ({
    ...state,
    error: errorMsg,
    loading: false
  })),

  on(BookActions.DeleteBookAction, (state, { bookId }) => ({
    ...state,
    loading: true
  })),

  on(BookActions.DeleteBookSuccessAction, (state, { bookId }) => ({
    ...state,
    list: state.list.filter(item => item.id !== bookId),
    loading: false
  })),

  on(BookActions.DeleteBookFailureAction, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
    loading: false
  })),

  on(BookActions.SelectBookAction, (state, {bookId}) => ({
    ...state,
    selectedBook: state.list.find(book => book.id === bookId),
    selected: true
  })),

  on(BookActions.DeselectBookAction, (state) => ({
    ...state,
    selectedBook: {},
    selected: false,
  })),

);

export function BookReducer(state: BookState | undefined, action: Action) {
  // console.log(state, action);
  return Reducer(state, action);
}

export const bookList = (state: BookState) => state.list;
