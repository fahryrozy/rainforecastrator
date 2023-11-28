import {Alerts, Forecast, Location} from '@domain/entities';

export interface IForecastPayload {
  location: Location;
  forecast: Forecast;
  alerts: Alerts;
}

export class ForecastPayload {
  public forecastday: Forecast;

  constructor(forecast: Forecast) {
    this.forecastday = forecast;
  }
}
