/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor() {
      this.todos = [];
  }

  add(todo) {
      if (typeof(todo) !== 'string' || todo.trim() === '') {
          throw new Error("you must insert a string and non-empty string");
      }
      this.todos.push(todo);
  }

  remove(indexOfTodo) {
      if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
          throw new Error("invalid index"); // This will now throw an error for invalid indices
      }
      this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
      if (index < 0 || index >= this.todos.length) {
          throw new Error("invalid index"); // Same error handling as remove
      }
      if (typeof updatedTodo !== 'string' || updatedTodo.trim() === '') {
          throw new Error("you must insert a string and non-empty string");
      }
      this.todos[index] = updatedTodo;
  }

  getAll() {
      return this.todos;
  }

  get(indexOfTodo) {
      if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
          throw new Error("invalid index"); // Throw an error for invalid indices
      }
      return this.todos[indexOfTodo];
  }

  clear() {
      this.todos = [];
  }
}

module.exports = Todo;

// const todoList = new Todo();
// todoList.add("Buy groceries");
// todoList.add("Walk the dog");
// console.log(todoList.getAll()); // Outputs: [ 'Buy groceries', 'Walk the dog' ]
// todoList.update(1, "Walk the cat");
// console.log(todoList.get(1)); // Outputs: "Walk the cat"
// todoList.remove(0);
// console.log(todoList.getAll()); // Outputs: [ 'Walk the cat' ]
// todoList.clear();
// console.log(todoList.getAll()); // Outputs: []
