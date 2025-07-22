import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { ITodo } from "./todo.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo } from "./schema/todo.schema";

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}
  async createNewTodo(todo: CreateTodoDto) {
    const newTodo = await this.todoModel.create(todo);
    return { message: "Todo created successfully", data: newTodo };
  }
  async getAllTodos() {
    const todos = await this.todoModel.find().populate("userId");
    return { message: "All Todos fetched successfully", data: todos };
  }
  async getTodoById(id: string) {
    const todo = await this.todoModel.findById(id).populate("userId");
    if (!todo) {
      throw new Error("Todo not found");
    }
    return { message: "Todo fetched successfully", data: todo };
  }
  async updateTodo(id: string, updateTodoDto: UpdateTodoDto) {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(
      id,
      { ...updateTodoDto, updatedAt: new Date() },
      { new: true, runValidators: true },
    );
    if (!updatedTodo) {
      throw new Error("Todo not found");
    }
    return { message: "Todo updated successfully", data: updatedTodo };
  }
  async deleteTodo(id: string) {
    const deletedTodo = await this.todoModel.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }
    return { message: "Todo deleted successfully", data: deletedTodo };
  }

}
