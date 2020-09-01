import {AuthorActions, AuthorActionTypes} from '../actions/author.actions';
import {Author} from '../models/author.model';

export interface AuthorState {
  list: Author[];
  loading: boolean;
  error: Error;
}

const initialState: AuthorState = {
  list: [],
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

    default:
      return state;
  }
}
