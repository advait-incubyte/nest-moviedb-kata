import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MovieController {

  @Get(':movieName/oldness')
  getOldness(movieName: string): string {
    return `The movie "${movieName}" is old.`;
  }

}
