import React from 'react';
import BaseLayout from '@presentation/layout';
import Header from '@presentation/components/molecules/Header/Header';
import AstronomyCard from '@presentation/components/molecules/Astronomy/AstronomyCard';
import Forecast from '@presentation/components/molecules/Forecast/Forecast';
import ConditionCard from '@presentation/components/molecules/Condition/ConditionCard';
import useViewModel from './Home.VM';
import WeatherInfo from '@presentation/components/molecules/Info/WeatherInfo';

const Home = () => {
  const {
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
            data={weatherInfo}
            onSelectDate={setSelectedDate}
            date={date}
            open={open}
            onClickDate={onClickDate}
          />
          <WeatherInfo data={weatherInfo} />
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
