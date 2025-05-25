import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TrainService } from './train.service';
import { TrainController } from './train.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { ValidateNumericIdMiddleware } from './middlewares/validate-id.middleware';

@Module({
  imports: [JwtModule],
  controllers: [TrainController],
  providers: [TrainService, PrismaService, JwtStrategy],
})
export class TrainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateNumericIdMiddleware).forRoutes('trains/:id');
  }
}
