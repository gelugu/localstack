import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { Task } from 'src/tasks/schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly mapsService: TasksService) {}

  @Get()
  getAll(): Promise<Task[]> {
    return this.mapsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Task> {
    return this.mapsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() map: CreateTaskDto): Promise<Task> {
    return this.mapsService.create(map);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Task> {
    return this.mapsService.remove(id);
  }

  @Put(':id')
  update(@Body() map: CreateTaskDto, @Param('id') id: string): Promise<Task> {
    return this.mapsService.update(id, map);
  }
}
