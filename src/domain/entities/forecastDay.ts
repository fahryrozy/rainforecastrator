import {Astro, Hour, Day} from '@domain/entities';

export interface Forecastday {
  date: Date;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}
