import React from 'react';
import BaseLayout from '@presentation/layout';
import Header from '@presentation/components/molecules/Header/Header';
import AstronomyCard from '@presentation/components/molecules/Astronomy/AstronomyCard';
import Forecast from '@presentation/components/molecules/Forecast/Forecast';
import ConditionCard from '@presentation/components/molecules/Condition/ConditionCard';
import useViewModel from './Home.VM';
import WeatherInfo from '@presentation/components/molecules/Info/WeatherInfo';
import WeatherInfoOnDate from '@presentation/components/molecules/Info/WeatherInfoOnDate';
import {Button} from 'react-native';
import * as Sentry from '@sentry/react-native';

const Home = () => {
  const {
    isToday,
    onRefresh,
    refreshing,
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
        <BaseLayout
          data={weatherInfo}
          onRefresh={onRefresh}
          refreshing={refreshing}>
          <Header
            loc={selectedLocation}
            onSelectDate={setSelectedDate}
            date={date}
            open={open}
            onClickDate={onClickDate}
          />
          <Button
            title="Try!"
            onPress={() => {
              Sentry.captureException(new Error('First error'));
            }}
          />
          {isToday ? (
            <WeatherInfo data={weatherInfo} />
          ) : (
            <WeatherInfoOnDate
              data={weatherInfoDate}
              condition={selectedCondition}
            />
          )}
          <AstronomyCard data={astronomy} />
          <Forecast
            isToday={isToday}
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
