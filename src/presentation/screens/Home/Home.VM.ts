import {useCallback, useEffect, useState} from 'react';
import {GetCurrentUsecase} from '@domain/useCases/getCurrentUsecase';
import {useAppSelector} from '@core/config/store/hooks';
import container from '@di/inversify.config';
import {locationStore} from '@core/config/store/slice/locationSlice';
import moment from 'moment';
import {Astronomy, Current, Forecast, Hour, Location} from '@domain/entities';
import {GetAstronomyUsecase} from '@domain/useCases/getAstronomyUsecase';
import {GetForecastUsecase} from '@domain/useCases/getForecastUsecase';
import {GetHistoryUsecase} from '@domain/useCases/getHistoryUsecase';

const HomeVM = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
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
  }>();
  const [sortedForecasting, setSortedForecasting] = useState<Hour[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<Hour>();

  const [date, setDate] = useState(new Date());
  const [eventDate, setEventDate] = useState<string>(
    moment(date).format('YYYY-MM-DD'),
  );
  const [open, setOpen] = useState(false);
  const onClickDate = () => setOpen(!open);
  const isToday = eventDate === moment().format('YYYY-MM-DD');
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);

  const {selectedLocation} = useAppSelector(locationStore);
  const setToday = () => {
    setEventDate(moment().format('YYYY-MM-DD'));
    setDate(new Date());
  };
  const setSelectedDate = (indate: Date) => {
    setDate(indate);
    setEventDate(moment(indate).format('YYYY-MM-DD'));
    onClickDate();
  };

  const getWeather = async () => {
    setLoading(true);
    const resolve = container.resolve(GetCurrentUsecase);
    const res = await resolve.execute(`id:${selectedLocation.id}`);
    setWeatherInfo(res);
    setLoading(false);
  };

  const getWeatherDate = async () => {
    setLoading(true);
    const resolve = container.resolve(GetHistoryUsecase);
    const res = await resolve.execute(`id:${selectedLocation.id}`, eventDate);
    setWeatherInfoDate(res);
    if (!isToday) setForecastHourly(res);

    setLoading(false);
  };

  const getAstro = async () => {
    const resolve = container.resolve(GetAstronomyUsecase);
    const res = await resolve.execute(`id:${selectedLocation.id}`, eventDate);
    setAstronomy(res);
    return res;
  };

  const getForecastHourly = async () => {
    setLoading(true);
    const resolve = container.resolve(GetForecastUsecase);
    const res = await resolve.execute(
      `id:${selectedLocation.id}`,
      1,
      eventDate,
    );
    setForecastHourly(res);
    setLoading(false);
    return res;
  };

  const sortTime = (data: {location: Location; forecast: Forecast}) => {
    setLoading(true);
    if (
      data?.forecast?.forecastday?.length > 0 &&
      data?.forecast?.forecastday[0]?.hour?.length > 0
    ) {
      const currTime =
        parseFloat(
          moment(data.location.localtime, 'YYYY-MM-DD H:m').format('Hmm'),
        ) - 30;
      let sorted = [...data?.forecast?.forecastday[0]?.hour].sort((a, b) => {
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
    } else {
      setSortedForecasting([]);
      setSelectedCondition(undefined);
    }
    setLoading(false);
  };

  const setCurrCondition = (item: Hour) => {
    setSelectedCondition(item);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setToday();
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isToday) {
      getWeather();
      getForecastHourly();
    } else getWeatherDate();
    getAstro();
  }, [selectedLocation, eventDate]);

  useEffect(() => {
    if (forecastHourly) sortTime(forecastHourly);
  }, [forecastHourly, weatherInfoDate]);

  useEffect(() => {
    setToday();
  }, [selectedLocation]);

  return {
    isToday,
    loading,
    onRefresh,
    refreshing,
    weatherInfo,
    weatherInfoDate,
    astronomy,
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
