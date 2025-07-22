import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { ITodo } from "./todo.interface";
@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post("")
  createTodo(@Body() todo: CreateTodoDto) {
    return this.todoService.createNewTodo(todo);
  }

  @Get("")
  getAll() {
    return this.todoService.getAllTodos();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.todoService.getTodoById(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.todoService.deleteTodo(id);
  }
}
