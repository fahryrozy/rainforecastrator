import {LOCATION_REPO} from '@core/constants';
import {LocationSearch} from '@domain/entities';
import {LocationRepo} from '@domain/repository/locationRepo';
import {inject, injectable} from 'inversify';

export interface SearchLocationUC {
  execute: (qlocation: string) => Promise<LocationSearch[]>;
}

@injectable()
export class LocationUseCase implements SearchLocationUC {
  private location: LocationRepo;
  constructor(@inject(LOCATION_REPO) private _location: LocationRepo) {
    this.location = _location;
  }

  async execute(qlocation: string) {
    return this.location.getLocation(qlocation);
  }
}
