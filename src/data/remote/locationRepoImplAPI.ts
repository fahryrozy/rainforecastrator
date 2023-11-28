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
      console.log('res location => ', res);
      return res;
    } catch (err) {
      console.log('err => ', err);
      throw err;
    }
  }
}
