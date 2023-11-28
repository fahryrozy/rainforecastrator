import {HISTORY_REMOTE_DATA} from '@core/constants';
import {ForecastAPI, LocationAPI} from '@data/remote/entities';
import HistoryRepoImplAPI from '@data/remote/historyRepoImplAPI';
import {HistoryRepo} from '@domain/repository/historyRepo';
import {inject, injectable} from 'inversify';

@injectable()
export class HistoryRepoImpl implements HistoryRepo {
  private RemoteDataSource: HistoryRepoImplAPI;

  constructor(
    @inject(HISTORY_REMOTE_DATA) RemoteDataSource: HistoryRepoImplAPI,
  ) {
    this.RemoteDataSource = RemoteDataSource;
  }

  async getHistory(
    qLocation: string,
    date: string,
  ): Promise<{
    location: LocationAPI;
    forecast: ForecastAPI;
  }> {
    return await this.RemoteDataSource.getHistory(qLocation, date);
  }
}
