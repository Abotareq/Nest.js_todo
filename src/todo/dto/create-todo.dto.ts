import { IsString, IsNotEmpty, IsBoolean, IsDate } from "class-validator";
export class CreateTodoDto {
  @IsString()
  @IsNotEmpty({ message: "Title is required" })
  title: String;
  @IsString()
  @IsNotEmpty({ message: "Description is required" })
  description: String;
  @IsBoolean()
  @IsNotEmpty({ message:"status is required" })
  completed: Boolean;
  @IsString()
  @IsNotEmpty({ message:"user id is required" })
  userId: String;
  @IsDate()
  dueDate: Date;
  @IsDate()
  createdAt: Date;
  @IsDate()
  updatedAt: Date;
}
