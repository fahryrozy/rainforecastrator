import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/id';
import {styles} from './CurrentWeather.styles';
import useViewModel from './ForecastOnDate.VM';
import Clock from 'react-live-clock';
import DatePicker from 'react-native-date-picker';
import iconStyle from '@core/style/Icon';
import {Forecast, Location} from '@domain/entities';

interface ForecastProps {
  selectedDate: string;
  forecastData: {location: Location; forecast: Forecast};
  onDateChange: (newDate: Date) => void;
}

const ForecastOnDate = ({forecastData}) => {
  moment.locale('id');
  return (
    <View style={styles.containerCurWeather}>
      {forecastData && (
        <View style={styles.curWeatherCard}>
          <View style={styles.info}>
            <View style={styles.tempCard}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.locText}>
                {forecastData?.location?.name}
              </Text>
              <Text
                style={
                  styles.tempText
                }>{`${forecastData?.forecast?.forecastday[0]?.hour[0]?.temp_c}°`}</Text>

              <View style={styles.locTimeCard}>
                <Text style={styles.locTime}>Local time : </Text>
                {forecastData?.location?.tz_id && (
                  <Clock
                    style={styles.locTime}
                    format={'HH:mm:ss'}
                    ticking={true}
                    element={Text}
                    timezone={forecastData.location.tz_id}
                  />
                )}
              </View>
              <Text style={styles.lastUpdDate}>{`Last updated on ${moment(
                forecastData?.forecast.forecastday[0]?.hour[0]?.time,
                'YYYY-MM-DD H:m',
              ).format('LT')}`}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.tempInfoText}>
              {forecastData?.forecast.forecastday[0]?.hour[0]?.condition?.text}
            </Text>
            <Image
              style={styles.icon}
              source={{
                uri: `https:${forecastData?.forecast.forecastday[0]?.hour[0]?.condition?.icon}`,
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ForecastOnDate;
