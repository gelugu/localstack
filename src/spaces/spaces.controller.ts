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

import { CreateSpaceDto } from 'src/spaces/dto/create-space.dto';
import { SpacesService } from 'src/spaces/spaces.service';
import { Space } from 'src/spaces/schemas/space.schema';

@Controller('spaces')
export class SpacesController {
  constructor(private readonly mapsService: SpacesService) {}

  @Get()
  getAll(): Promise<Space[]> {
    return this.mapsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Space> {
    return this.mapsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() map: CreateSpaceDto): Promise<Space> {
    return this.mapsService.create(map);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Space> {
    return this.mapsService.remove(id);
  }

  @Put(':id')
  update(@Body() map: CreateSpaceDto, @Param('id') id: string): Promise<Space> {
    return this.mapsService.update(id, map);
  }
}
