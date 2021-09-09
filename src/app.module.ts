import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpacesModule } from 'src/spaces/spaces.module';
import { ProjectsModule } from 'src/projects/projects.module';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/localstack'),
    SpacesModule,
    ProjectsModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
