/**
 * @format
 */

import 'react-native';
import React from 'react';
import Forecast from '@presentation/components/molecules/Forecast/Forecast';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-dom';
import '@testing-library/react-native/extend-expect';

describe('Forecast Card in Homescreen view which used to see forecasting data', () => {
  const mockIsToday = true;
  const mockIsLoading = false;
  const mockSetCurrCondition = jest.fn();
  const mockDate = '1900-01-01';
  const mockData_forecast = {
    chance_of_rain: 56,
    chance_of_snow: 0,
    cloud: 63,
    condition: {
      code: 1180,
      icon: '//cdn.weatherapi.com/weather/64x64/day/293.png',
      text: 'Patchy light rain',
    },
    dewpoint_c: 22.6,
    dewpoint_f: 72.7,
    feelslike_c: 34,
    feelslike_f: 93.3,
    gust_kph: 12.8,
    gust_mph: 7.9,
    heatindex_c: 34,
    heatindex_f: 93.3,
    humidity: 64,
    is_day: 1,
    precip_in: 0.04,
    precip_mm: 0.9,
    pressure_in: 29.81,
    pressure_mb: 1010,
    temp_c: 30.1,
    temp_f: 86.2,
    time: '2023-12-04 13:00',
    time_epoch: 1701669600,
    uv: 7,
    vis_km: 9,
    vis_miles: 5,
    will_it_rain: 0,
    will_it_snow: 0,
    wind_degree: 330,
    wind_dir: 'NNW',
    wind_kph: 10.8,
    wind_mph: 6.7,
    windchill_c: 30.1,
    windchill_f: 86.2,
  };
  it('renders correctly with blank data', () => {
    renderer.create(
      <Forecast
        data={[]}
        setCurrCondition={mockSetCurrCondition}
        date={mockDate}
        isToday={mockIsToday}
        isLoading={mockIsLoading}
      />,
    );
  });

  it('renders correctly with mock data', () => {
    renderer.create(
      <Forecast
        data={[mockData_forecast]}
        setCurrCondition={mockSetCurrCondition}
        date={mockDate}
        isToday={mockIsToday}
        isLoading={mockIsLoading}
      />,
    );
  });

  it('has hourly forecast title text', () => {
    render(
      <Forecast
        data={[]}
        setCurrCondition={mockSetCurrCondition}
        date={mockDate}
        isToday={mockIsToday}
        isLoading={mockIsLoading}
      />,
    );
    const titleText = screen.getByText(`Today's hourly forecast`);
    expect(titleText).toBeOnTheScreen();
  });

  it('has forecast weather temp', () => {
    render(
      <Forecast
        data={[mockData_forecast]}
        setCurrCondition={mockSetCurrCondition}
        date={mockDate}
        isToday={mockIsToday}
        isLoading={mockIsLoading}
      />,
    );
    const titleText = screen.getByTestId('fc-temp');
    expect(titleText).toBeOnTheScreen();
  });

  it('has forecast weather image', () => {
    render(
      <Forecast
        data={[mockData_forecast]}
        setCurrCondition={mockSetCurrCondition}
        date={mockDate}
        isToday={mockIsToday}
        isLoading={mockIsLoading}
      />,
    );
    const titleText = screen.getByTestId('fc-img');
    expect(titleText).toBeOnTheScreen();
  });

  it('has forecast weather time', () => {
    render(
      <Forecast
        data={[mockData_forecast]}
        setCurrCondition={mockSetCurrCondition}
        date={mockDate}
        isToday={mockIsToday}
        isLoading={mockIsLoading}
      />,
    );
    const titleText = screen.getByTestId('fc-time');
    expect(titleText).toBeOnTheScreen();
  });
});
