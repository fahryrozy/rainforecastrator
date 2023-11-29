import {injectable} from 'inversify';
import {ForecastAPI, LocationAPI} from './entities';
import {fetchHistory} from '@core/config/api/config';

@injectable()
export default class HistoryRepoImplAPI {
  async getHistory(
    qlocation: string,
    date: string,
  ): Promise<{
    location: LocationAPI;
    forecast: ForecastAPI;
  }> {
    try {
      const res = await fetchHistory({
        cityName: qlocation,
        date: date,
      });
      const data: {
        location: LocationAPI;
        forecast: ForecastAPI;
      } = await res;
      console.log('rest => ', res);
      return data;
    } catch (err) {
      console.error('err => ', err);
      throw err;
    }
  }
}
