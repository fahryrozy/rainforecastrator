import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/id';
import {styles} from './CurrentWeather.styles';
import Clock from 'react-live-clock';
import {Forecast, Hour, Location} from '@domain/entities';
import {Colors, Typhography} from '@core/style';
import {Wrapper} from '@core/style/Wrapper';
import IconStyle from '@core/style/Icon';

type Props = {
  data:
    | {
        location: Location;
        forecast: Forecast;
      }
    | undefined;
  condition: Hour | undefined;
  isLoading: boolean;
};

const WeatherInfoOnDate: React.FC<Props> = ({data, condition, isLoading}) => {
  moment.locale('en');

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.pureWhite} />;
  }
  return (
    <View style={[styles.weatherContainer, Wrapper.ContainerColumn()]}>
      {data && condition && (
        <View style={styles.weatherInfoCard}>
          <View style={styles.locCard}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={Typhography.headerBigDefault()}>
              {data?.location?.name}
            </Text>
            <View style={styles.locTimeCard}>
              <Text style={Typhography.bodyDefault()}>Local time : </Text>
              {data?.location?.tz_id ? (
                <Clock
                  style={styles.locTime}
                  format={'HH:mm:ss'}
                  ticking={true}
                  element={Text}
                  timezone={data.location.tz_id}
                />
              ) : (
                <Text style={Typhography.bodyDefault()}>N/A</Text>
              )}
            </View>
          </View>

          <View style={styles.tempCard}>
            <View style={styles.iconContainer}>
              <Image
                style={IconStyle.iconBig}
                source={{
                  uri: `https:${condition.condition?.icon}`,
                }}
              />
              <Text
                style={Typhography.headerExtraBigDefault()}>{`${condition.temp_c}°`}</Text>
            </View>

            <Text style={Typhography.headerHalfBigDefault()}>
              {data?.forecast.forecastday[0]?.hour[0]?.condition?.text}
            </Text>

            <Text style={Typhography.bodyBold()}>{`${moment(
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
