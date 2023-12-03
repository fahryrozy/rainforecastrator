import {fetchLocation} from '@core/config/api/config';
import {injectable} from 'inversify';
import {LocationSearchAPI} from './entities';

@injectable()
export default class LocationRepoImplAPI {
  async getLocation(qLocation: string): Promise<LocationSearchAPI[]> {
    try {
      const res = await fetchLocation({
        cityName: qLocation,
      });
      return res;
    } catch (err) {
      throw err;
    }
  }
}
