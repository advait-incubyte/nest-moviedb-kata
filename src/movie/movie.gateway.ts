import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieGateway {
  async getMovie(movieName: string): Promise<string> {
    return Promise.resolve(`The movie "${movieName}" is old.`);
  }
}