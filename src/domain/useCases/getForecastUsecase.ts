import {inject, injectable} from 'inversify';
import {Alerts, Forecast, Location} from '../entities';
import {ForecastRepo} from '@domain/repository/forecastRepo';
import {FORECAST_REPO} from '@core/constants';

export interface IGetForecastUC {
  execute: (
    qlocation: string,
    days?: number,
    date?: string,
  ) => Promise<{
    location: Location;
    forecast: Forecast;
    alerts: Alerts;
  }>;
}

@injectable()
export class GetForecastUsecase implements IGetForecastUC {
  private ForecastData: ForecastRepo;
  constructor(@inject(FORECAST_REPO) ForecastData: ForecastRepo) {
    this.ForecastData = ForecastData;
  }

  async execute(qlocation: string, days?: number, date?: string) {
    return this.ForecastData.getForecast(qlocation, days, date);
  }
}
