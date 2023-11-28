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
import {GetHistoryUsecase} from '@domain/useCases/getHistoryUsecase';

const HomeVM = () => {
  const [date, setDate] = useState(new Date());
  const [weatherInfo, setWeatherInfo] = useState<{
    location: Location;
    current: Current;
  }>();

  const [weatherInfoDate, setWeatherInfoDate] = useState<{
    location: Location;
    forecast: Forecast;
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

  const [eventDate, setEventDate] = useState<string>(
    moment(date).format('YYYY-MM-DD'),
  );
  const [open, setOpen] = useState(false);
  const isToday = eventDate !== moment().format('YYYY-MM-DD');
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

  const getWeatherDate = async () => {
    const resolve = container.resolve(GetHistoryUsecase);
    const res = await resolve.execute(`id:${selectedLocation.id}`, eventDate);
    // dispatch(storeHistoryForecast(res));
    console.log('res history => ', res);
    setWeatherInfoDate(res);

    const currTime =
      parseFloat(
        moment(res.location.localtime, 'YYYY-MM-DD H:m').format('Hmm'),
      ) - 60;
    console.log('currtime -> ', currTime);
    let sorted = [...res?.forecast?.forecastday[0]?.hour].sort((a, b) => {
      const x =
        currTime - parseFloat(moment(a.time, 'YYYY-MM-DD H:m').format('Hmm'));
      const y =
        currTime - parseFloat(moment(b.time, 'YYYY-MM-DD H:m').format('Hmm'));

      if (x > 0 && y > 0) return y - x;
      if (x < 0 && y < 0) return y - x;
      else return x - y;
    });
    console.log('data on date => ', sorted[0]);
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

    const currTime =
      parseFloat(
        moment(res.location.localtime, 'YYYY-MM-DD H:m').format('Hmm'),
      ) - 30;
    console.log('currtime -> ', currTime);
    let sorted = [...res?.forecast?.forecastday[0]?.hour].sort((a, b) => {
      const x =
        currTime - parseFloat(moment(a.time, 'YYYY-MM-DD H:m').format('Hmm'));
      const y =
        currTime - parseFloat(moment(b.time, 'YYYY-MM-DD H:m').format('Hmm'));

      if (x > 0 && y > 0) return y - x;
      if (x < 0 && y < 0) return y - x;
      else return x - y;
    });
    setSortedForecasting(sorted);
    setSelectedCondition(sorted[0]);
    return res;
  };

  const setCurrCondition = (item: Hour) => {
    setSelectedCondition(item);
  };

  useEffect(() => {
    getWeather();
    getForecastHourly();
    getWeatherDate();
    getAstro();
  }, [selectedLocation, eventDate, isToday]);

  return {
    isToday,
    weatherInfo,
    weatherInfoDate,
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
