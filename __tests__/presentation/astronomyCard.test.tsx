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
import {mockData_astronomy} from '../data/mock';
import AstronomyCard from '@presentation/components/molecules/Astronomy/AstronomyCard';

describe('Weather Info Card in Homescreen', () => {
  it('renders correctly with blank data', () => {
    renderer.create(<WeatherInfo data={undefined} isLoading={false} />);
  });

  it('renders correctly with mock data', () => {
    renderer.create(
      <AstronomyCard data={mockData_astronomy} isLoading={false} />,
    );
  });

  it('match snapshot', () => {
    const snap = renderer
      .create(<AstronomyCard data={mockData_astronomy} isLoading={false} />)
      .toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('has astronomy phase title', () => {
    render(<AstronomyCard data={mockData_astronomy} isLoading={false} />);
    const titleText = screen.getByTestId('as-title');
    expect(titleText).toBeOnTheScreen();
  });

  it('has astronomy phase time', () => {
    render(<AstronomyCard data={mockData_astronomy} isLoading={false} />);
    const titleText = screen.getByTestId('as-time');
    expect(titleText).toBeOnTheScreen();
  });
});
