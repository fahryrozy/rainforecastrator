import {fetchLocation} from '@core/config/api/config';
import {injectable} from 'inversify';
import {LocationSearchAPI} from './entities';

@injectable()
export default class LocationRepoImplAPI {
  async getLocation(qLocation: string): Promise<LocationSearchAPI[]> {
    return await fetchLocation({
      cityName: qLocation,
    });
  }
}
