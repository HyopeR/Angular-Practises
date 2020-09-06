import {AuthorActions, BookActions} from '../actions/index';
import {Author} from '../models/author.model';
import {Action, createReducer, on} from '@ngrx/store';

export const authorFeatureKey = 'authors';

export interface AuthorState {
  list: Author[];
  selectedAuthor: Author | object;
  selected: boolean;
  loading: boolean;
  loaded: boolean;
  error: Error;
}

const initialState: AuthorState = {
  list: [],
  selectedAuthor: {},
  selected: false,
  loading: false,
  loaded: false,
  error: undefined
};

const Reducer = createReducer(
  initialState,
  on(AuthorActions.GetAuthorsAction, (state) => ({
    loading: true
  })),
  on(AuthorActions.GetAuthorsSuccessAction, (state, { authors }) => ({
    ...state,
    list: authors,
    loading: false,
    loaded: true
  })),
  on(AuthorActions.GetAuthorsFailureAction, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
    loading: false,
    loaded: false
  })),
  on(AuthorActions.SelectAuthorAction, (state, { authorId }) => ({
    ...state,
    // @ts-ignore
    selectedAuthor: state.list.find(x => x.id === authorId)
  })),
  on(AuthorActions.SelectedAuthorAction, (state) => ({
    ...state,
    selected: true
  }))
);

export function AuthorReducer(state: AuthorState | undefined, action: Action) {
  // console.log(state, action);
  return Reducer(state, action);
}

export const authorList = (state: AuthorState) => state.list;

