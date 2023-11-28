import {useEffect, useState} from 'react';
import {GetCurrentUsecase} from '@domain/useCases/getCurrentUsecase';
import {useAppDispatch, useAppSelector} from '@core/config/store/hooks';
import container from '@di/inversify.config';
import {
  currentStore,
  setCurrentWeather,
} from '@store/slice/currentWeatherSlice';
import {
  selectDate,
  selectedDateStore,
} from '@core/config/store/slice/dateSlice';
import moment from 'moment';
import {locationStore} from '@core/config/store/slice/locationSlice';
import {GetHistoryUsecase} from '@domain/useCases/getHistoryUsecase';
import {
  historyStore,
  storeHistoryForecast,
} from '@core/config/store/slice/historySlice';

const CurentWeatherVM = () => {
  const dispatch = useAppDispatch();
  const forecastData = useAppSelector(historyStore);
  const {date} = useAppSelector(selectedDateStore);
  const [mydate, setmyDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const {selectedLocation} = useAppSelector(locationStore);

  const getWeather = async () => {
    const resolve = container.resolve(GetHistoryUsecase);
    const res = await resolve.execute(`id:${selectedLocation.id}`, date);
    console.log('selectedLocation => ', `id:${selectedLocation.id}`);
    console.log('res cur history => ', res);
    dispatch(storeHistoryForecast(res));
    return res;
  };

  const setSelectedLocDate = (indate: Date) => {
    setOpen(false);
    console.log('date history => ', mydate);
    setmyDate(indate);
    dispatch(selectDate(moment(indate).format('YYYY-MM-DD')));
  };
  useEffect(() => {
    getWeather();
  }, [selectedLocation, date]);

  return {
    forecastData,
    open,
    mydate,
    setOpen,
    setSelectedLocDate,
    lastWeek,
    nextWeek,
  };
};

export default CurentWeatherVM;
