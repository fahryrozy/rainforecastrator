/**
 * @format
 */

import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-dom';
import '@testing-library/react-native/extend-expect';
import WeatherInfo from '@presentation/components/molecules/WeatherInfo/WeatherInfo';

describe('Weather Info Card in Homescreen', () => {
  const mockData_weatherInfo = {
    current: {
      cloud: 75,
      condition: {
        code: 1273,
        icon: '//cdn.weatherapi.com/weather/64x64/day/386.png',
        text: 'Patchy light rain with thunder',
      },
      feelslike_c: 30,
      feelslike_f: 86,
      gust_kph: 13.3,
      gust_mph: 8.3,
      humidity: 100,
      is_day: 1,
      last_updated: '2023-12-04 13:45',
      last_updated_epoch: 1701672300,
      precip_in: 0,
      precip_mm: 0.04,
      pressure_in: 29.83,
      pressure_mb: 1010,
      temp_c: 28,
      temp_f: 82.4,
      uv: 6,
      vis_km: 5,
      vis_miles: 3,
      wind_degree: 330,
      wind_dir: 'NNW',
      wind_kph: 6.1,
      wind_mph: 3.8,
    },
    location: {
      country: 'Indonesia',
      lat: -6.22,
      localtime: '2023-12-04 13:51',
      localtime_epoch: 1701672665,
      lon: 106.85,
      name: 'Jakarta',
      region: 'Jakarta Raya',
      tz_id: 'Asia/Jakarta',
    },
  };

  it('renders correctly with blank data', () => {
    renderer.create(<WeatherInfo data={undefined} isLoading={false} />);
  });

  it('renders correctly with mock data', () => {
    renderer.create(
      <WeatherInfo data={mockData_weatherInfo} isLoading={false} />,
    );
  });

  it('has location information', () => {
    render(<WeatherInfo data={mockData_weatherInfo} isLoading={false} />);
    const titleText = screen.getByTestId('wi-locInfo');
    expect(titleText).toBeOnTheScreen();
  });

  it('has temp information', () => {
    render(<WeatherInfo data={mockData_weatherInfo} isLoading={false} />);
    const titleText = screen.getByTestId('wi-tempInfo');
    expect(titleText).toBeOnTheScreen();
  });

  it('has weather image', () => {
    render(<WeatherInfo data={mockData_weatherInfo} isLoading={false} />);
    const titleText = screen.getByTestId('wi-weatherImage');
    expect(titleText).toBeOnTheScreen();
  });
});
