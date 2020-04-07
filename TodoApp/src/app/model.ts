export class Model {
  user;
  items;

  constructor() {
    this.user = 'Person';
    this.items = [
      new TodoItem('Sport', false),
      new TodoItem('Breakfast', true),
      new TodoItem('Work', false),
      new TodoItem('Cinema', true),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}
