import {BookActions, BookActionTypes} from '../actions/book.actions';
import {Book} from '../models/book.model';
import {Search} from '../models/search.model';

export interface BookState {
  list: Book[];
  selectedBook: Book;
  selected: boolean;
  loading: boolean;
  error: Error;
  search: Search;
}

const initialState: BookState = {
  list: [],
  selectedBook: {},
  selected: false,
  loading: false,
  error: undefined,
  search: {
    list: [],
    searching: false,
    error: undefined,
  }
};

export function BookReducer(
  state: BookState = initialState,
  action: BookActions
) {
  // console.log(action, state);
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
        selectedBook: state.list.find(book => book.id === action.payload),
        selected: false
      };

    case BookActionTypes.SELECTED_BOOK:
      return {
        ...state,
        selected: true
      };

    case BookActionTypes.DESELECT_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
        selected: true,
      };

    case BookActionTypes.DESELECTED_BOOK:
      return {
        ...state,
        selected: false
      };

    case BookActionTypes.SEARCH_BOOK:
      return {
        ...state,
        search: {
          ...state.search,
          searching: true
        }
      };

    case BookActionTypes.SEARCH_BOOK_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          searching: false,
          list: state.list.filter(author => author.name === action.payload)
        }
      };

    case BookActionTypes.SEARCH_BOOK_FAILURE:
      return {
        ...state,
        search: {
          ...state.search,
          searching: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
}
