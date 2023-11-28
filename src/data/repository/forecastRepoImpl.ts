import {FORECAST_REMOTE_DATA} from '@core/constants';
import {AlertsAPI, ForecastAPI, LocationAPI} from '@data/remote/entities';
import ForecastRepoImplAPI from '@data/remote/forecastRepoImplAPI';
import {ForecastRepo} from '@domain/repository/forecastRepo';
import {inject, injectable} from 'inversify';

@injectable()
export class ForecastRepoImpl implements ForecastRepo {
  private RemoteDataSource: ForecastRepoImplAPI;

  constructor(
    @inject(FORECAST_REMOTE_DATA) RemoteDataSource: ForecastRepoImplAPI,
  ) {
    this.RemoteDataSource = RemoteDataSource;
  }

  async getForecast(
    qLocation: string,
    days?: number,
    date?: string,
  ): Promise<{
    location: LocationAPI;
    forecast: ForecastAPI;
    alerts: AlertsAPI;
  }> {
    return await this.RemoteDataSource.getForecast(qLocation, days, date);
  }
}
