import {fetchAstronomy} from '@core/config/api/config';
import {injectable} from 'inversify';
import {AstronomyAPI, LocationAPI} from './entities';

@injectable()
export default class AstronomyRepoImplAPI {
  async getAstronomy(
    qlocation: string,
    date: string,
  ): Promise<{
    location: LocationAPI;
    astronomy: AstronomyAPI;
  }> {
    try {
      const res = await fetchAstronomy({
        cityName: qlocation,
        date: date,
      });
      const data: {
        location: LocationAPI;
        astronomy: AstronomyAPI;
      } = await res;
      return data;
    } catch (err) {
      console.log('err => ', err);
      throw err;
    }
  }
}
