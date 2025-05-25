import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TrainService } from './train.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CreateTrainDto } from './dto/create-train.dto';
import { PutTrainDto } from './dto/put-train.dto';
import { PatchTrainDto } from './dto/patch-train.dto';

@Controller('trains')
@UseGuards(JwtAuthGuard)
export class TrainController {
  constructor(private train: TrainService) {}

  @Post()
  create(@Body() dto: CreateTrainDto) {
    return this.train.create(dto);
  }

  @Get()
  findAllOrSearch(
    @Query('sortBy') sortBy?: string,
    @Query('order') order?: 'asc' | 'desc',
    @Query('name') name?: string,
  ) {
    if (name) {
      return this.train.searchByName(name);
    }

    return this.train.findAll(sortBy, order);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.train.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: PutTrainDto) {
    return this.train.update(+id, dto);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() dto: PatchTrainDto) {
    return this.train.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.train.delete(+id);
  }
}
