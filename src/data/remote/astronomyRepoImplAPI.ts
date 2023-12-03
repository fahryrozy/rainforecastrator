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
    return await fetchAstronomy({
      cityName: qlocation,
      date: date,
    });
  }
}
