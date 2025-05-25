import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrainService {
  constructor(private prisma: PrismaService) {}

  create(data) {
    return this.prisma.train.create({ data });
  }

  findAll(sortBy?: string, order: 'asc' | 'desc' = 'asc') {
    const sortField = sortBy || 'departureTime';
    return this.prisma.train.findMany({ orderBy: { [sortField]: order } });
  }

  findOne(id: number) {
    return this.prisma.train.findUnique({ where: { id } });
  }

  update(id: number, data) {
    return this.prisma.train.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.train.delete({ where: { id } });
  }
}
