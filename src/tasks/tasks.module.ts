import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TasksController } from 'src/tasks/tasks.controller';
import { TasksService } from 'src/tasks/tasks.service';
import { Task, TaskSchema } from 'src/tasks/schemas/task.schema';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
})
export class TasksModule {}
