import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieGateway } from './movie.gateway';

@Module({
  controllers: [MovieController],
  providers: [MovieService, MovieGateway],
})
export class MovieModule {}
