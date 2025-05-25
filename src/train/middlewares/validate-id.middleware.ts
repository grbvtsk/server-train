import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ValidateNumericIdMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id || Number(id) <= 0) {
      throw new BadRequestException(`Invalid ID: ${id}`);
    }

    const train = await this.prisma.train.findUnique({
      where: { id: Number(id) },
    });

    if (!train) {
      throw new NotFoundException(`Train with ID ${id} not found`);
    }

    next();
  }
}
