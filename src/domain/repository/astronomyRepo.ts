import {Location, Astronomy} from '@domain/entities';

export interface AstronomyRepo {
  getAstronomy(
    qlocation: string,
    date?: string,
  ): Promise<{
    location: Location;
    astronomy: Astronomy;
  }>;
}
