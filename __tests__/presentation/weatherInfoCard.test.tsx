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
import {mockData_weatherInfo} from '../data/mock';

describe('Weather Info Card in Homescreen', () => {
  it('renders correctly with blank data', () => {
    renderer.create(<WeatherInfo data={undefined} isLoading={false} />);
  });

  it('renders correctly with mock data', () => {
    renderer.create(
      <WeatherInfo data={mockData_weatherInfo} isLoading={false} />,
    );
  });

  it('match snapshot', () => {
    const snap = renderer
      .create(<WeatherInfo data={mockData_weatherInfo} isLoading={false} />)
      .toJSON();
    expect(snap).toMatchSnapshot();
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
