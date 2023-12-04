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
import {mockData_forecast} from '../data/mock';

describe('Forecast Card in Homescreen view which used to see forecasting data', () => {
  const mockIsToday = true;
  const mockIsLoading = false;
  const mockSetCurrCondition = jest.fn();
  const mockDate = '1900-01-01';
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

  it('match snapshot', () => {
    const snap = renderer
      .create(
        <Forecast
          data={[]}
          setCurrCondition={mockSetCurrCondition}
          date={mockDate}
          isToday={mockIsToday}
          isLoading={mockIsLoading}
        />,
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
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
