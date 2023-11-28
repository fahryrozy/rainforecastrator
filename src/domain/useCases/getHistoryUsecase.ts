import {inject, injectable} from 'inversify';
import {Forecast, Location} from '../entities';
import {HistoryRepo} from '@domain/repository/historyRepo';
import {HISTORY_REPO} from '@core/constants';

export interface IGetHistoryUC {
  execute: (
    qlocation: string,
    date: string,
  ) => Promise<{
    location: Location;
    forecast: Forecast;
  }>;
}

@injectable()
export class GetHistoryUsecase implements IGetHistoryUC {
  private HistoryData: HistoryRepo;
  constructor(@inject(HISTORY_REPO) HistoryData: HistoryRepo) {
    this.HistoryData = HistoryData;
  }

  async execute(qlocation: string, date: string) {
    return this.HistoryData.getHistory(qlocation, date);
  }
}
