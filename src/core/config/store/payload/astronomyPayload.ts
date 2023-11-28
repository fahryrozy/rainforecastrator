import {Astronomy, Location} from '@domain/entities';

export interface IAstronomyPayload {
  astronomy: Astronomy;
  location: Location;
}

export class AstronomyPayload {
  public astro: Astronomy;
  public location: Location;

  constructor(location: Location, astro: Astronomy) {
    this.astro = astro;
    this.location = location;
  }
}
