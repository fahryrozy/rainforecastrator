import {injectable} from 'inversify';
import {ForecastAPI, LocationAPI} from './entities';
import {fetchHistory} from '@core/config/api/config';
import {Dashboard} from '@domain/entities/dashboard';

@injectable()
export default class DashboardRepoImplAPI {
  async getWeather(qlocation: string, date: string): Promise<Dashboard> {
    try {
      const res = await fetchHistory({
        cityName: qlocation,
        date: date,
      });
      const test: {
        location: LocationAPI;
        forecast: ForecastAPI;
      } = await res;
      let data!: Dashboard;
      data.condition = test.forecast.forecastday[0].hour[0].condition;
      return data;
    } catch (err) {
      console.log('err => ', err);
      throw err;
    }
  }
}
