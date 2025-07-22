import { Injectable, NotFoundException } from "@nestjs/common";
import { IUser } from "./user.interface";

@Injectable()
export class UserService {
  users: IUser[] = [];

  addUser(user: IUser) {
    this.users.push(user);
    return { message: "user added" };
  }

  addManyUsers(users: IUser[]) {
    this.users.push(...users);
    return { message: "many Users added", data: this.users };
  }

  getAll() {
    return this.users;
  }

  deleteById(id) {
    this.users = this.users.filter((u) => u.id != id);
    return { messsage: "deleted Successfully" };
  }

  getUserbyId(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) throw new NotFoundException("User not Found");
    return user;
  }
  updateUser(id: number, user: IUser) {
    const index = this.users.findIndex((u) => u.id == id);
    if (index === -1) throw new NotFoundException("User not Found");
    this.users[index] = { ...this.users[index], ...user };
    return { message: "User updated", data: this.users[index] };
  }
}
