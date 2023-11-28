import {useEffect, useState} from 'react';
import {GetCurrentUsecase} from '@domain/useCases/getCurrentUsecase';
import {useAppDispatch, useAppSelector} from '@core/config/store/hooks';
import container from '@di/inversify.config';
import {locationStore} from '@core/config/store/slice/locationSlice';

import moment from 'moment';
import {
  Alerts,
  Astronomy,
  Current,
  Forecast,
  Hour,
  Location,
} from '@domain/entities';
import {GetAstronomyUsecase} from '@domain/useCases/getAstronomyUsecase';
import {GetForecastUsecase} from '@domain/useCases/getForecastUsecase';

const HomeVM = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());
  const [weatherInfo, setWeatherInfo] = useState<{
    location: Location;
    current: Current;
  }>();
  const [astronomy, setAstronomy] = useState<{
    location: Location;
    astronomy: Astronomy;
  }>();
  const [forecastHourly, setForecastHourly] = useState<{
    location: Location;
    forecast: Forecast;
    alerts: Alerts;
  }>();
  const [sortedForecasting, setSortedForecasting] = useState<Hour[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<Hour>();

  const [eventDate, setEventDate] = useState<string>();
  const [open, setOpen] = useState(false);
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const {selectedLocation} = useAppSelector(locationStore);

  const onClickDate = () => setOpen(!open);

  const setSelectedDate = (indate: Date) => {
    setOpen(false);
    setDate(indate);
    console.log('date -> ', date);
    setEventDate(moment(indate).format('YYYY-MM-DD'));
    onClickDate();
  };

  const getWeather = async () => {
    const resolve = container.resolve(GetCurrentUsecase);
    const res = await resolve.execute(`id:${selectedLocation.id}`);
    setWeatherInfo(res);
    return res;
  };

  const getAstro = async () => {
    const resolve = container.resolve(GetAstronomyUsecase);
    const res = await resolve.execute(`id:${selectedLocation.id}`, eventDate);
    setAstronomy(res);
    return res;
  };

  const getForecastHourly = async () => {
    const resolve = container.resolve(GetForecastUsecase);
    const res = await resolve.execute(
      `id:${selectedLocation.id}`,
      1,
      eventDate,
    );

    setForecastHourly(res);
    return res;
  };

  const sortedData = () => {
    if (
      forecastHourly?.forecast?.forecastday?.length > 0 &&
      forecastHourly?.forecast?.forecastday[0]?.hour?.length > 0 &&
      Object.keys(weatherInfo).length > 0
    ) {
      const currTime = Math.floor(weatherInfo.location.localtime_epoch - 1800);
      let sorted = [...forecastHourly?.forecast?.forecastday[0]?.hour].sort(
        (a, b) => {
          const x = currTime - a.time_epoch;
          const y = currTime - b.time_epoch;

          if (x > 0 && y > 0) return y - x;
          if (x < 0 && y < 0) return y - x;
          else return x - y;
        },
      );
      setSortedForecasting(sorted);
      setSelectedCondition(sorted[0]);
    }
  };

  const setCurrCondition = (item: Hour) => {
    setSelectedCondition(item);
  };

  useEffect(() => {
    getWeather();
    getAstro();
    getForecastHourly();
    sortedData();
  }, [selectedLocation, eventDate]);

  useEffect(() => {
    sortedData();
  }, [forecastHourly]);

  return {
    weatherInfo,
    astronomy,
    forecastHourly,
    sortedForecasting,
    selectedCondition,
    selectedLocation,
    open,
    onClickDate,
    date,
    setDate,
    eventDate,
    setOpen,
    setSelectedDate,
    setCurrCondition,
    lastWeek,
    nextWeek,
  };
};

export default HomeVM;
