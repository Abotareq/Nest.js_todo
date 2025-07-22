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
  CreateTodoDto(@Body() todo: ITodo) {
    return this.todoService.CreateTodoDto(todo);
  }

  @Get("")
  getAll() {
    return this.todoService.getAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.todoService.getTodoById(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTodoDto: ITodo) {
    return this.todoService.UpdateTodoDto(+id, updateTodoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.todoService.deleteById(+id);
  }
}
