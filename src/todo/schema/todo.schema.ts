import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import MongooseSchema from "mongoose";
import { Document, ObjectId } from "mongoose";
@Schema({ timestamps: true })
export class Todo extends Document {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  completed: boolean;
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: "User" })
  userId: ObjectId;
  @Prop({ type: Date, default: Date.now })
  dueDate: Date;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
