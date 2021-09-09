import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  name: string;

  @Prop()
  id: string;

  @Prop()
  status: boolean;

  @Prop()
  subtasksIds: string[];

  @Prop()
  parentId: string;

  @Prop()
  comment: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
