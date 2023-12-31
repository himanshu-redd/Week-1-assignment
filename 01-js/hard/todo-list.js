/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/


class Todo {
  todoList = new Array();

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    let todoIndex = -1;
    for (let index = 0; index < this.todoList.length; index++) {
      if (this.todoList[index].index == indexOfTodo) {
        todoIndex = index;
        break;
      }
    }
    if (todoIndex != -1) {
      this.todoList = new Array().concat(this.todoList.slice(0, todoIndex), this.todoList.slice(todoIndex + 1));
    } else {
      console.error("Invalid index");
    }
  }

  get(indexOfTodo) {
    let index = -1
    for (let i = 0; i < this.todoList.length; i++) {
      if(indexOfTodo == this.todoList[i].index){
        index = i; 
      }
    }
    if(index == -1){
      console.log("Invalid index"); 
    } else {
      console.log(JSON.stringify(this.todoList[index])); 
    }
  }

  update(index, updatedTodo) {
    let todoIndex = -1;
    for (let i = 0; i < this.todoList.length; i++) {
      if (index == this.todoList[i].index) {
        todoIndex = i;
        break;
      }
    }
    if (todoIndex != -1) {
      this.todoList[todoIndex].todo = updatedTodo;
      console.log("Todo updated successfully for index : " + index);
    } else {
      console.log("Invalid index");
    }
  }

  getAll() {
    if(this.todoList.length > 0) {
    console.log(JSON.stringify(this.todoList, null, 2));
    } else {
      console.error("Todo List is empty"); 
    }
  }

  clear(){
    this.todoList = new Array(); 
    console.log("Todo list deleted successfully");
  }
}

const todo = new Todo();
todo.add({ index: 1, todo: "Clean cloaths" });
todo.add({ index: 2, todo: "Make bread" });
todo.add({ index: 3, todo: "Learn about messaging queue" });
todo.add({ index: 4, todo: "Go for a walk" });
todo.add({ index: 5, todo: "Listen to JRE podcast" });
todo.remove(5);
todo.update(2, "Make brown bread");
todo.get(2); 
todo.getAll();
todo.clear(); 
todo.getAll(); 


