import {CurrentRepo} from '@domain/repository/currentRepo';
import CurrentRepoImplAPI from '../remote/currentRepoImplAPI';
import {inject, injectable} from 'inversify';
import {Current, Location} from '@domain/entities';
import {CURRENT_WEATHER_REMOTE_DATA} from '@core/constants';

@injectable()
export class CurrentRepoImpl implements CurrentRepo {
  private RemoteDataSource: CurrentRepoImplAPI;

  constructor(
    @inject(CURRENT_WEATHER_REMOTE_DATA) RemoteDataSource: CurrentRepoImplAPI,
  ) {
    this.RemoteDataSource = RemoteDataSource;
  }

  async getCurrent(qLocation: string): Promise<{
    location: Location;
    current: Current;
  }> {
    return await this.RemoteDataSource.getCurrent(qLocation);
  }
}
