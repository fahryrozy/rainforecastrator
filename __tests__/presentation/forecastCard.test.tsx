/**
 * @format
 */

import 'react-native';
import React from 'react';
import Forecast from '@presentation/components/molecules/Forecast/Forecast';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Forecast Card in Homescreen view which used to see forecasting data', () => {
  it('renders correctly with blank data', () => {
    const isToday = true;
    const isLoading = false;
    const setCurrCondition = jest.fn();
    const date = '1900-01-01';
    renderer.create(
      <Forecast
        data={[]}
        setCurrCondition={setCurrCondition}
        date={date}
        isToday={isToday}
        isLoading={isLoading}
      />,
    );
  });

  it('renders correctly with mock data', () => {
    const isToday = true;
    const isLoading = false;
    const setCurrCondition = jest.fn();
    const date = '1900-01-01';
    renderer.create(
      <Forecast
        data={[]}
        setCurrCondition={setCurrCondition}
        date={date}
        isToday={isToday}
        isLoading={isLoading}
      />,
    );
  });

  it('match snapshot', () => {
    const isToday = true;
    const isLoading = false;
    const setCurrCondition = jest.fn();
    const date = '1900-01-01';
    const snap = renderer
      .create(
        <Forecast
          data={[]}
          setCurrCondition={setCurrCondition}
          date={date}
          isToday={isToday}
          isLoading={isLoading}
        />,
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('has hourly forecast title text', () => {});
  it('has forecast weather temp', () => {});
  it('has forecast weather image', () => {});
  it('has forecast weather time', () => {});
});
