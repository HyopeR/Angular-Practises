import {AuthorActions, AuthorActionTypes} from '../actions/author.actions';
import {Author} from '../models/author.model';

export interface AuthorState {
  list: Author[];
  selectedAuthor: Author;
  selected: boolean;
  loading: boolean;
  error: Error;
}

const initialState: AuthorState = {
  list: [],
  selectedAuthor: {},
  selected: false,
  loading: false,
  error: undefined
};

export function AuthorReducer(
  state: AuthorState = initialState,
  action: AuthorActions
) {
  switch (action.type) {
    case AuthorActionTypes.GET_AUTHORS:
      return {
        ...state,
        loading: true
      };

    case AuthorActionTypes.GET_AUTHORS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case AuthorActionTypes.GET_AUTHORS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case AuthorActionTypes.SELECT_AUTHOR:
      return {
        ...state,
        selectedAuthor: state.list.find(x => x.id === action.payload)
      };

    case AuthorActionTypes.SELECTED_AUTHOR:
      return {
        ...state,
        selected: action.payload
      };

    default:
      return state;
  }
}

export const authorList = (state: AuthorState) => state.list;

