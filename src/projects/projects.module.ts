import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectsController } from 'src/projects/projects.controller';
import { ProjectsService } from 'src/projects/projects.service';
import { Project, ProjectSchema } from 'src/projects/schemas/project.schema';

@Module({
  providers: [ProjectsService],
  controllers: [ProjectsController],
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
})
export class ProjectsModule {}
