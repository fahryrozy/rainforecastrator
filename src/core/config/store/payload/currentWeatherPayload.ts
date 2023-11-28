import {Current, Location} from '@domain/entities';

export interface ICurrentWeather {
  current: Current;
  location: Location;
}

export class CurrentWeatherPayload {
  public current: Current;
  public location: Location;

  constructor(current: Current, location: Location) {
    this.current = current;
    this.location = location;
  }
}
