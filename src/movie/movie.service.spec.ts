import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';
import { vi } from 'vitest';
import { MovieGateway } from './movie.gateway';

describe('MovieService Unit Test Suite', () => {
  let service: MovieService;
  let gateway: MovieGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        {
          provide: MovieGateway,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<MovieService>(MovieService);
    gateway = module.get<MovieGateway>(MovieGateway);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return oldness, given a movie name', async () => {
    gateway.getMovie = vi.fn().mockImplementationOnce(() => Promise.resolve('12 years old'));

    const movieName = 'Harry Potter and the Prisoner of Azkaban';
    await service.getOldness(movieName);
    expect(gateway.getMovie).toHaveBeenCalledWith(movieName);
  });
});
