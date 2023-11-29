import {View, Text, Image} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/id';
import {styles} from './CurrentWeather.styles';
import Clock from 'react-live-clock';
import {Forecast, Hour, Location} from '@domain/entities';

type Props = {
  data:
    | {
        location: Location;
        forecast: Forecast;
      }
    | undefined;
  condition: Hour | undefined;
};

const WeatherInfoOnDate: React.FC<Props> = ({data, condition}) => {
  moment.locale('en');
  console.log('cond => ', condition);
  return (
    <View style={styles.mainContainer}>
      {data && condition && (
        <View style={styles.weatherInfoCard}>
          <View style={styles.locCard}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.locText}>
              {data?.location?.name}
            </Text>
            <View style={styles.locTimeCard}>
              <Text style={styles.locTime}>Local time : </Text>
              {data?.location?.tz_id && (
                <Clock
                  style={styles.locTime}
                  format={'HH:mm:ss'}
                  ticking={true}
                  element={Text}
                  timezone={data.location.tz_id}
                />
              )}
            </View>
          </View>

          <View style={styles.tempCard}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={{
                  uri: `https:${condition.condition?.icon}`,
                }}
              />
              <Text style={styles.tempText}>{`${condition.temp_c}°`}</Text>
            </View>

            <Text style={styles.tempInfoText}>
              {data?.forecast.forecastday[0]?.hour[0]?.condition?.text}
            </Text>

            <Text style={styles.lastUpdDate}>{`${moment(
              condition.time,
              'YYYY-MM-DD H:m',
            ).format('llll')}`}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default WeatherInfoOnDate;
