import {GetCurrentUsecase} from '@domain/useCases/getCurrentUsecase';
import 'reflect-metadata';
import {Container} from 'inversify';
import CurrentRepoImplAPI from '@data/remote/currentRepoImplAPI';
import AstronomyRepoImplAPI from '@data/remote/astronomyRepoImplAPI';
import {GetAstronomyUsecase} from '@domain/useCases/getAstronomyUsecase';
import ForecastRepoImplAPI from '@data/remote/forecastRepoImplAPI';
import {GetForecastUsecase} from '@domain/useCases/getForecastUsecase';
import {LocationUseCase} from '@domain/useCases/searchLocUseCase';
import LocationRepoImplAPI from '@data/remote/locationRepoImplAPI';
import HistoryRepoImplAPI from '@data/remote/historyRepoImplAPI';
import {GetHistoryUsecase} from '@domain/useCases/getHistoryUsecase';
import {CurrentRepoImpl} from '@data/repository/currentRepoImpl';
import {
  ASTRONOMY_REMOTE_DATA,
  ASTRONOMY_REPO,
  ASTRONOMY_USECASE,
  CURRENT_WEATHER_REMOTE_DATA,
  CURRENT_WEATHER_REPO,
  CURRENT_WEATHER_USECASE,
  FORECAST_REMOTE_DATA,
  FORECAST_REPO,
  FORECAST_USECASE,
  HISTORY_REMOTE_DATA,
  HISTORY_REPO,
  HISTORY_USECASE,
  LOCATION_REMOTE_DATA,
  LOCATION_REPO,
  LOCATION_USECASE,
} from '@core/constants';
import {CurrentRepo} from '@domain/repository/currentRepo';
import {AstronomyRepoImpl} from '@data/repository/astronomyRepoImpl';
import {AstronomyRepo} from '@domain/repository/astronomyRepo';
import {ForecastRepoImpl} from '@data/repository/forecastRepoImpl';
import {ForecastRepo} from '@domain/repository/forecastRepo';
import {LocationRepo} from '@domain/repository/locationRepo';
import {LocationRepoImpl} from '@data/repository/locationRepoImpl';
import {HistoryRepo} from '@domain/repository/historyRepo';
import {HistoryRepoImpl} from '@data/repository/historyRepoImpl';

const container = new Container();
container
  .bind<CurrentRepo>(CURRENT_WEATHER_REMOTE_DATA)
  .to(CurrentRepoImplAPI)
  .inSingletonScope();

container
  .bind<CurrentRepo>(CURRENT_WEATHER_REPO)
  .to(CurrentRepoImpl)
  .inSingletonScope();

container
  .bind<GetCurrentUsecase>(CURRENT_WEATHER_USECASE)
  .to(GetCurrentUsecase)
  .inSingletonScope();

container
  .bind<AstronomyRepo>(ASTRONOMY_REMOTE_DATA)
  .to(AstronomyRepoImplAPI)
  .inSingletonScope();

container
  .bind<AstronomyRepo>(ASTRONOMY_REPO)
  .to(AstronomyRepoImpl)
  .inSingletonScope();

container
  .bind<GetAstronomyUsecase>(ASTRONOMY_USECASE)
  .to(GetAstronomyUsecase)
  .inSingletonScope();

container
  .bind<ForecastRepo>(FORECAST_REMOTE_DATA)
  .to(ForecastRepoImplAPI)
  .inSingletonScope();

container
  .bind<ForecastRepo>(FORECAST_REPO)
  .to(ForecastRepoImpl)
  .inSingletonScope();

container
  .bind<GetForecastUsecase>(FORECAST_USECASE)
  .to(GetForecastUsecase)
  .inSingletonScope();

container
  .bind<LocationRepo>(LOCATION_REMOTE_DATA)
  .to(LocationRepoImplAPI)
  .inSingletonScope();

container
  .bind<LocationRepo>(LOCATION_REPO)
  .to(LocationRepoImpl)
  .inSingletonScope();

container
  .bind<LocationUseCase>(LOCATION_USECASE)
  .to(LocationUseCase)
  .inSingletonScope();

container
  .bind<HistoryRepo>(HISTORY_REMOTE_DATA)
  .to(HistoryRepoImpl)
  .inSingletonScope();

container
  .bind<HistoryRepo>(HISTORY_REPO)
  .to(HistoryRepoImplAPI)
  .inSingletonScope();

container
  .bind<GetHistoryUsecase>(HISTORY_USECASE)
  .to(GetHistoryUsecase)
  .inSingletonScope();

export default container;
