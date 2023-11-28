import {Location, Forecast} from '@domain/entities';

export interface HistoryRepo {
  getHistory(
    qlocation: string,
    date: string,
  ): Promise<{
    location: Location;
    forecast: Forecast;
  }>;
}
