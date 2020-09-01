import {BookActions, BookActionTypes} from '../actions/book.actions';
import {Book} from '../models/book.model';

export interface BookState {
  list: Book[];
  selectedBook: {};
  selected: boolean;
  loading: boolean;
  error: Error;
}

const initialState: BookState = {
  list: [],
  selectedBook: {},
  selected: false,
  loading: false,
  error: undefined
};

export function BookReducer(
  state: BookState = initialState,
  action: BookActions
) {

  switch (action.type) {
    case BookActionTypes.GET_BOOKS:
      return {
        ...state,
        loading: true
      };

    case BookActionTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case BookActionTypes.GET_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case BookActionTypes.ADD_BOOK:
      return {
        ...state,
        loading: true
      };

    case BookActionTypes.ADD_BOOK_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };

    case BookActionTypes.ADD_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case BookActionTypes.DELETE_BOOK:
      return {
        ...state,
        loading: true
      };

    case BookActionTypes.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };

    case BookActionTypes.DELETE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case BookActionTypes.SELECT_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
        selected: true,
        loading: false
      };

    case BookActionTypes.DESELECT_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
        selected: false,
        loading: false
      };

    default:
      return state;
  }
}
