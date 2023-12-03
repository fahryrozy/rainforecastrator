import {injectable} from 'inversify';
import {CurrentAPI, LocationAPI} from './entities';
import {fetchCurrent} from '@core/config/api/config';

@injectable()
export default class CurrentRepoImplAPI {
  async getCurrent(qlocation: string): Promise<{
    location: LocationAPI;
    current: CurrentAPI;
  }> {
    try {
      const res = await fetchCurrent({
        cityName: qlocation,
      });
      const data: {
        location: LocationAPI;
        current: CurrentAPI;
      } = await res;
      return data;
    } catch (err) {
      throw err;
    }
  }
}
