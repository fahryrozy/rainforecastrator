import {CurrentRepo} from '../repository/currentRepo';
import {inject, injectable} from 'inversify';
import {Current, Location} from '../entities';
import {CURRENT_WEATHER_REPO} from '@core/constants';

export interface IGetCurrentUC {
  execute: (qlocation: string) => Promise<{
    location: Location;
    current: Current;
  }>;
}

@injectable()
export class GetCurrentUsecase implements IGetCurrentUC {
  private currentWeather: CurrentRepo;
  constructor(@inject(CURRENT_WEATHER_REPO) currentWeather: CurrentRepo) {
    this.currentWeather = currentWeather;
  }

  async execute(qlocation: string) {
    return this.currentWeather.getCurrent(qlocation);
  }
}
