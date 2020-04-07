import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  // index.html sayfasında <app-root> adlı etiket bulunur.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getUser() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(value) {
    // tslint:disable-next-line:no-conditional-assignment
    if ( value !== '' && value != parseInt(value)) {
      this.model.items.push(new TodoItem(value, false));
    } else {
      alert('Please use letters.');
    }
  }
}
