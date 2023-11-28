import React from 'react';
import BaseLayout from '@presentation/layout';
import Header from '@presentation/components/molecules/Header/Header';
import AstronomyCard from '@presentation/components/molecules/Astronomy/AstronomyCard';
import Forecast from '@presentation/components/molecules/Forecast/Forecast';
import ConditionCard from '@presentation/components/molecules/Condition/ConditionCard';
import useViewModel from './Home.VM';
import WeatherInfo from '@presentation/components/molecules/Info/WeatherInfo';
import moment from 'moment';
import WeatherInfoOnDate from '@presentation/components/molecules/Info/WeatherInfoOnDate';

const Home = () => {
  const {
    isToday,
    weatherInfoDate,
    selectedLocation,
    weatherInfo,
    astronomy,
    sortedForecasting,
    selectedCondition,
    date,
    eventDate,
    open,
    onClickDate,
    setCurrCondition,
    setSelectedDate,
  } = useViewModel();
  return (
    <>
      {selectedLocation && weatherInfo && (
        <BaseLayout data={weatherInfo}>
          <Header
            loc={selectedLocation}
            onSelectDate={setSelectedDate}
            date={date}
            open={open}
            onClickDate={onClickDate}
          />
          {isToday ? (
            <WeatherInfoOnDate
              data={weatherInfoDate}
              condition={selectedCondition}
            />
          ) : (
            <WeatherInfo data={weatherInfo} />
          )}
          {/* <WeatherInfo data={weatherInfo} /> */}
          <AstronomyCard data={astronomy} />
          <Forecast
            data={sortedForecasting}
            date={eventDate}
            setCurrCondition={setCurrCondition}
          />
          <ConditionCard data={selectedCondition} />
        </BaseLayout>
      )}
    </>
  );
};

export default Home;
