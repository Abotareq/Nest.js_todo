import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { IUser } from "./user.interface";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("")
  addUser(@Body() user: IUser) {
    return this.userService.addUser(user);
  }

  @HttpCode(201)
  @Post("many")
  addManyUser(@Body() users: IUser[]) {
    return this.userService.addManyUsers(users);
  }

  @Get("")
  getAll() {
    return this.userService.getAll();
  }

  @Delete(":id")
  deleteById(@Param("id") id) {
    return this.userService.deleteById(id);
  }

  @Get(":id")
  getUserbyId(@Param("id") id) {
    return this.userService.getUserbyId(+id);
  }
  @Patch(":id")
  updateUser(@Param("id") id, @Body() user: IUser) {
    return this.userService.updateUser(+id, user);
  }
}
