import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SpacesController } from 'src/spaces/spaces.controller';
import { SpacesService } from 'src/spaces/spaces.service';
import { Space, SpaceSchema } from 'src/spaces/schemas/space.schema';

@Module({
  providers: [SpacesService],
  controllers: [SpacesController],
  imports: [
    MongooseModule.forFeature([{ name: Space.name, schema: SpaceSchema }]),
  ],
})
export class SpacesModule {}
