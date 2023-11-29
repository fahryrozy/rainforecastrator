import {Location, Forecast, Alerts} from '@domain/entities';

export interface ForecastRepo {
  getForecast(
    qlocation: string,
    days: number,
    date: string,
  ): Promise<{
    location: Location;
    forecast: Forecast;
    alerts: Alerts;
  }>;
}
