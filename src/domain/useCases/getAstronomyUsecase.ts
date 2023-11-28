import {AstronomyRepo} from '../repository/astronomyRepo';
import {inject, injectable} from 'inversify';
import {Astronomy, Location} from '../entities';
import {ASTRONOMY_REPO} from '@core/constants';

export interface IGetAstronomyUC {
  execute: (
    qlocation: string,
    date?: string,
  ) => Promise<{
    location: Location;
    astronomy: Astronomy;
  }>;
}

@injectable()
export class GetAstronomyUsecase implements IGetAstronomyUC {
  private AstronomyWeather: AstronomyRepo;
  constructor(@inject(ASTRONOMY_REPO) AstronomyWeather: AstronomyRepo) {
    this.AstronomyWeather = AstronomyWeather;
  }

  async execute(qlocation: string, date?: string) {
    return this.AstronomyWeather.getAstronomy(qlocation, date);
  }
}
