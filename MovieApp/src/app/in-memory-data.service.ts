import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {id: 1, name: 'Movie 1', description: 'Regular', imageUrl: 'm1.jpg'},
      {id: 2, name: 'Movie 2', description: 'Regular', imageUrl: 'm2.jpg'},
      {id: 3, name: 'Movie 3', description: 'Regular', imageUrl: 'm3.jpg'},
      {id: 4, name: 'Movie 4', description: 'Regular', imageUrl: 'm4.jpg'},
      {id: 5, name: 'Movie 5', description: 'Regular', imageUrl: 'm5.jpg'},
      {id: 6, name: 'Movie 6', description: 'Regular', imageUrl: 'm6.jpg'},
      {id: 7, name: 'Movie 7', description: 'Regular', imageUrl: 'm7.jpg'}
    ];
    return {movies};
  }

  constructor() { }
}
