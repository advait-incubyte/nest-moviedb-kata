import { Inject, Injectable } from '@nestjs/common';
import { MovieGateway } from './movie.gateway';

@Injectable()
export class MovieService {
  constructor(@Inject(MovieGateway) private readonly movieGateway: MovieGateway) {}

  async getOldness(movieName: string): Promise<string> {
    return this.movieGateway.getMovie(movieName);
  }
}
