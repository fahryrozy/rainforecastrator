import React from 'react';
import BaseLayout from '@presentation/layout';
import Header from '@presentation/components/molecules/Header/Header';
import AstronomyCard from '@presentation/components/molecules/Astronomy/AstronomyCard';
import Forecast from '@presentation/components/molecules/Forecast/Forecast';
import ConditionCard from '@presentation/components/molecules/Condition/ConditionCard';
import useViewModel from './Home.VM';
import WeatherInfo from '@presentation/components/molecules/WeatherInfo/WeatherInfo';
import WeatherInfoOnDate from '@presentation/components/molecules/WeatherInfo/WeatherInfoOnDate';
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
    loading,
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
          {isToday ? (
            <WeatherInfo data={weatherInfo} isLoading={loading} />
          ) : (
            <WeatherInfoOnDate
              isLoading={loading}
              data={weatherInfoDate}
              condition={selectedCondition}
            />
          )}
          {astronomy && <AstronomyCard data={astronomy} isLoading={loading} />}
          <Forecast
            isToday={isToday}
            isLoading={loading}
            data={sortedForecasting}
            date={eventDate}
            setCurrCondition={setCurrCondition}
          />
          <ConditionCard data={selectedCondition} isLoading={loading} />
        </BaseLayout>
      )}
    </>
  );
};

export default Home;
