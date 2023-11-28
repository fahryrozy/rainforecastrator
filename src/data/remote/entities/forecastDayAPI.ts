import {AstroAPI, HourAPI, DayAPI} from '@data/remote/entities';

export interface ForecastdayAPI {
  date: Date;
  date_epoch: number;
  day: DayAPI;
  astro: AstroAPI;
  hour: HourAPI[];
}
