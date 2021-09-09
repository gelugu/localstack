import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpaceDocument = Space & Document;

@Schema()
export class Space {
  @Prop()
  name: string;

  @Prop()
  id: string;

  @Prop()
  prajectsIds: string[];

  @Prop()
  description: string;
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
