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
import AstronomyCard from '@presentation/components/molecules/Astronomy/AstronomyCard';

describe('Weather Info Card in Homescreen', () => {
  const mockData_astronomy = {
    astronomy: {
      astro: {
        moon_illumination: '62',
        moon_phase: 'Waning Gibbous',
        moonrise: '11:44 PM',
        moonset: '11:09 AM',
        sunrise: '05:29 AM',
        sunset: '05:57 PM',
      },
    },
    location: {
      country: 'Indonesia',
      lat: -6.22,
      localtime: '2023-12-04 14:41',
      localtime_epoch: 1701675700,
      lon: 106.85,
      name: 'Jakarta',
      region: 'Jakarta Raya',
      tz_id: 'Asia/Jakarta',
    },
  };

  it('renders correctly with blank data', () => {
    renderer.create(
      <AstronomyCard data={mockData_astronomy} isLoading={false} />,
    );
  });

  it('renders correctly with mock data', () => {
    renderer.create(
      <AstronomyCard data={mockData_astronomy} isLoading={false} />,
    );
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
