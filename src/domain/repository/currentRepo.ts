import {Current, Location} from '../entities';

export interface CurrentRepo {
  getCurrent(qlocation: string): Promise<{
    location: Location;
    current: Current;
  }>;
}
