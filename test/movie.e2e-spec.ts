import { beforeAll, describe } from 'vitest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MovieModule } from '../src/movie/movie.module';
import request from 'supertest';

describe('Movie E2E Suite:', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MovieModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should give the oldness of a movie, given the name:', async () => {
    const movieName = 'Harry Potter and the Prisoner of Azkaban';
    const response = await request(app.getHttpServer())
      .get(`/movies/${movieName}/oldness`)
      .expect(200);

    expect(response.body).toBeDefined();
  });

  afterAll(async () => {
    await app.close();
  });
});
