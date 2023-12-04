import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/id';
import {styles} from './CurrentWeather.styles';
import Clock from 'react-live-clock';
import {Current, Location} from '@domain/entities';
import {Colors, Typhography} from '@core/style';
import {Wrapper} from '@core/style/Wrapper';
import IconStyle from '@core/style/Icon';

type Props = {
  data:
    | {
        location: Location;
        current: Current;
      }
    | undefined;
  isLoading: boolean;
};

const WeatherInfo: React.FC<Props> = ({data, isLoading}) => {
  moment.locale('id');
  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors.pureWhite}
        style={[styles.weatherContainer, Wrapper.ContainerColumn()]}
      />
    );
  }
  return (
    <View style={[styles.weatherContainer, Wrapper.ContainerColumn()]}>
      {data && (
        <View style={styles.weatherInfoCard}>
          <View style={styles.locCard}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={Typhography.headerBigDefault()}
              testID="wi-locInfo">
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
                  uri: `https:${data?.current?.condition?.icon}`,
                }}
                testID="wi-weatherImage"
              />
              <Text
                style={Typhography.headerExtraBigDefault()}>{`${data?.current?.temp_c}°`}</Text>
            </View>

            <Text
              style={Typhography.headerHalfBigDefault()}
              testID="wi-tempInfo">
              {data?.current?.condition?.text}
            </Text>

            <Text style={Typhography.bodyBold()}>{`Last updated on ${moment(
              data?.current?.last_updated,
              'YYYY-MM-DD H:m',
            ).format('LT')}`}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default WeatherInfo;
