import {Book} from './book.model';
import {Author} from './author.model';

export interface Search {
  list?: Book[] | Author[] | null;
  searching?: boolean;
  error?: Error | undefined;
}
