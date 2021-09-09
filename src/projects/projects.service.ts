import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/projects/schemas/project.schema';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectsModel: Model<ProjectDocument>,
  ) {}

  async getAll(): Promise<Project[]> {
    return this.projectsModel.find().exec();
  }

  async getById(id: string): Promise<Project> {
    return this.projectsModel.findById(id);
  }

  async create(map: CreateProjectDto): Promise<Project> {
    const newMap = new this.projectsModel(map);
    return newMap.save();
  }

  async remove(id: string): Promise<Project> {
    return this.projectsModel.findByIdAndRemove(id);
  }

  async update(id: string, project: CreateProjectDto): Promise<Project> {
    return this.projectsModel.findByIdAndUpdate(id, project, { new: true });
  }
}
