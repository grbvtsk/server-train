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

@Controller('trains')
@UseGuards(JwtAuthGuard)
export class TrainController {
  constructor(private train: TrainService) {}

  @Post()
  create(@Body() body) {
    return this.train.create(body);
  }

  @Get()
  findAll(
    @Query('sortBy') sortBy: string,
    @Query('order') order: 'asc' | 'desc',
  ) {
    return this.train.findAll(sortBy, order);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.train.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.train.update(+id, body);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() body) {
    return this.train.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.train.delete(+id);
  }
}
