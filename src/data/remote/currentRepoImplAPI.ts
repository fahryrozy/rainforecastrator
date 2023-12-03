import {injectable} from 'inversify';
import {CurrentAPI, LocationAPI} from './entities';
import {fetchCurrent} from '@core/config/api/config';

@injectable()
export default class CurrentRepoImplAPI {
  async getCurrent(qlocation: string): Promise<{
    location: LocationAPI;
    current: CurrentAPI;
  }> {
    return await fetchCurrent({
      cityName: qlocation,
    });
  }
}
