import {Location} from '@domain/entities';

export interface IForecastPayload {
  location: Location;
}

export class LocationPayload {
  public location: Location;

  constructor(location: Location) {
    this.location = location;
  }
}
