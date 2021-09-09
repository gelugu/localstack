import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Space, SpaceDocument } from 'src/spaces/schemas/space.schema';
import { CreateSpaceDto } from 'src/spaces/dto/create-space.dto';

@Injectable()
export class SpacesService {
  constructor(
    @InjectModel(Space.name) private spacesModel: Model<SpaceDocument>,
  ) {}

  async getAll(): Promise<Space[]> {
    return this.spacesModel.find().exec();
  }

  async getById(id: string): Promise<Space> {
    return this.spacesModel.findById(id);
  }

  async create(map: CreateSpaceDto): Promise<Space> {
    const newMap = new this.spacesModel(map);
    return newMap.save();
  }

  async remove(id: string): Promise<Space> {
    return this.spacesModel.findByIdAndRemove(id);
  }

  async update(id: string, space: CreateSpaceDto): Promise<Space> {
    return this.spacesModel.findByIdAndUpdate(id, space, { new: true });
  }
}
