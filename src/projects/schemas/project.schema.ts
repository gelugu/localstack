import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  id: string;

  @Prop()
  tasksIds: string[];

  @Prop()
  parentSpaceId: string;

  @Prop()
  description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
