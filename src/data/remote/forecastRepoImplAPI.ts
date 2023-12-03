import {injectable} from 'inversify';
import {AlertsAPI, ForecastAPI, LocationAPI} from './entities';
import {fetchForecast} from '@core/config/api/config';

@injectable()
export default class ForecastRepoImplAPI {
  async getForecast(
    qlocation: string,
    days: number,
    date: string,
  ): Promise<{
    location: LocationAPI;
    forecast: ForecastAPI;
    alerts: AlertsAPI;
  }> {
    return await fetchForecast({
      cityName: qlocation,
      days: days,
      date: date,
    });
  }
}
