import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/tasks/schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private tasksModel: Model<TaskDocument>,
  ) {}

  async getAll(): Promise<Task[]> {
    return this.tasksModel.find().exec();
  }

  async getById(id: string): Promise<Task> {
    return this.tasksModel.findById(id);
  }

  async create(map: CreateTaskDto): Promise<Task> {
    const newMap = new this.tasksModel(map);
    return newMap.save();
  }

  async remove(id: string): Promise<Task> {
    return this.tasksModel.findByIdAndRemove(id);
  }

  async update(id: string, task: CreateTaskDto): Promise<Task> {
    return this.tasksModel.findByIdAndUpdate(id, task, { new: true });
  }
}
