import {LOCATION_REMOTE_DATA} from '@core/constants';
import {LocationSearchAPI} from '@data/remote/entities';
import LocationRepoImplAPI from '@data/remote/locationRepoImplAPI';
import {LocationRepo} from '@domain/repository/locationRepo';
import {inject, injectable} from 'inversify';

@injectable()
export class LocationRepoImpl implements LocationRepo {
  private RemoteDataSource: LocationRepoImplAPI;

  constructor(
    @inject(LOCATION_REMOTE_DATA) RemoteDataSource: LocationRepoImplAPI,
  ) {
    this.RemoteDataSource = RemoteDataSource;
  }

  async getLocation(qLocation: string): Promise<LocationSearchAPI[]> {
    return await this.RemoteDataSource.getLocation(qLocation);
  }
}
