import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ITodo } from "./todo.interface";

@Injectable()
export class TodoService {
  todos: ITodo[] = [];
  idCounter = 1;

  CreateTodoDto(todo: ITodo) {
    todo.id = this.idCounter++;
    this.todos.push(todo);
    return { message: "todo added" };
  }
  addManyTodos(todos: ITodo[]) {
    todos.forEach(todo => {
      todo.id = this.idCounter++;
      this.todos.push(todo);
    });
    return { message: "many Todos added"};
  }
  getAll() {
    return this.todos;
  }
  getTodoById(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }
  deleteById(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return { message: "deleted Successfully" };
  }
  UpdateTodoDto(id: number, todo: ITodo) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...todo };
      return { message: "updated Successfully" };
    }
    return { message: "Todo not found" };
  }
}
