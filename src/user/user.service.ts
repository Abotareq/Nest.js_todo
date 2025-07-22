import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateTodoDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  users: CreateUserDto[] = [];
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async addUser(user: CreateUserDto) {
    const newUser = await this.userModel.create(user);
    return { message: "user added", data: newUser };
  }

  // addManyUsers(users: CreateUserDto[]) {
  //   this.users.push(...users);
  //   return { message: "many Users added", data: this.users };
  // }

  async getAll() {
    return await this.userModel.find();
  }

  async deleteById(id) {
    await this.userModel.findByIdAndDelete(id);
    return { messsage: "deleted Successfully" };
  }

  async getUserbyId(id) {
    const user = this.userModel.findById(id);
    if (!user) throw new NotFoundException("User not Found");
    return user;
  }
  async updateUser(id, updateUserDto: UpdateTodoDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true, runValidators: true },
    );
    if (!updatedUser) throw new NotFoundException("User not Found");
    return { message: "Updated Successfully", data: updatedUser };
  }
}
