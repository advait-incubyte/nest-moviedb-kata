import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';

describe('MovieService Unit Test Suite', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return oldness, given a movie name', () => {
    const movieName = 'Harry Potter and the Prisoner of Azkaban';
    service.getOldness(movieName);
    expect(service.getOldness).toHaveBeenCalledWith(movieName);
  });
});
