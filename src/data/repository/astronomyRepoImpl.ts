import {inject, injectable} from 'inversify';
import {AstronomyRepo} from '@domain/repository/astronomyRepo';
import {AstronomyAPI, LocationAPI} from '../remote/entities';
import AstronomyRepoImplAPI from '@data/remote/astronomyRepoImplAPI';
import {ASTRONOMY_REMOTE_DATA} from '@core/constants';

@injectable()
export class AstronomyRepoImpl implements AstronomyRepo {
  private RemoteDataSource: AstronomyRepoImplAPI;

  constructor(
    @inject(ASTRONOMY_REMOTE_DATA) RemoteDataSource: AstronomyRepoImplAPI,
  ) {
    this.RemoteDataSource = RemoteDataSource;
  }

  async getAstronomy(
    qLocation: string,
    date: string,
  ): Promise<{
    location: LocationAPI;
    astronomy: AstronomyAPI;
  }> {
    return await this.RemoteDataSource.getAstronomy(qLocation, date);
  }
}
