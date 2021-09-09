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

import { CreateProjectDto } from 'src/projects/dto/create-project.dto';
import { ProjectsService } from 'src/projects/projects.service';
import { Project } from 'src/projects/schemas/project.schema';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly mapsService: ProjectsService) {}

  @Get()
  getAll(): Promise<Project[]> {
    return this.mapsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Project> {
    return this.mapsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() map: CreateProjectDto): Promise<Project> {
    return this.mapsService.create(map);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Project> {
    return this.mapsService.remove(id);
  }

  @Put(':id')
  update(
    @Body() map: CreateProjectDto,
    @Param('id') id: string,
  ): Promise<Project> {
    return this.mapsService.update(id, map);
  }
}
