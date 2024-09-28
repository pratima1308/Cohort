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
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.log("Index out of bounds");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Index out of bounds");
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.log("Index out of bounds");
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

// Example

/* const todoList = new Todo(); 
todoList.add("Buy groceries"); 
todoList.add("Do laundry"); 

console.log(todoList.getAll());

todoList.update(1, "Do laundry and ironing"); 
console.log(todoList.getAll());

todoList.remove(0); 
console.log(todoList.getAll());

todoList.clear(); 
console.log(todoList.getAll()); 

todoList.clear();  */
