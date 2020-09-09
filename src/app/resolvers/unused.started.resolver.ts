import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import {AuthorActions, BookActions} from '../store/actions';
import {stateBook} from '../store/selectors/book.selectors';

@Injectable({
  providedIn: 'root'
})
export class UnusedStartedResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.store.dispatch(AuthorActions.GetAuthorsAction());
    this.store.dispatch(BookActions.GetBooksAction());

    return of('Completed fetch data.');
  }

}
