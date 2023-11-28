import {LocationSearch} from '@domain/entities/';

export interface LocationRepo {
  getLocation(qLocation: string): Promise<LocationSearch[]>;
}
