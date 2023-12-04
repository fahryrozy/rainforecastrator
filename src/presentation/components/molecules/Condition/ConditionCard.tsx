import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './ConditionCard.style';
import moment from 'moment';
import {Colors, Typhography} from '@core/style';
import {Hour} from '@domain/entities';

type Props = {
  data: Hour | undefined;
  isLoading: boolean;
};

const Condition: React.FC<Props> = ({data, isLoading}) => {
  return (
    <>
      {data && (
        <View>
          <View style={styles.astroTitle}>
            {data && (
              <Text style={Typhography.captionDefault()}>
                {`Condition at ${
                  isLoading ? '' : moment(data.time).format('LT')
                }`}
              </Text>
            )}
          </View>
          <View style={styles.astroContent}>
            <View style={styles.currentWeather}>
              <Text style={Typhography.captionDefault()}>Temp</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.pureWhite} />
              ) : (
                <Text style={Typhography.headerDefault()}>{data?.temp_c}</Text>
              )}
            </View>
            <View style={styles.currentWeather}>
              <Text style={Typhography.captionDefault()}>Wind Dir</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.pureWhite} />
              ) : (
                <Text style={Typhography.headerDefault()}>
                  {data?.wind_dir}
                </Text>
              )}
            </View>
            <View style={styles.currentWeather}>
              <Text style={Typhography.captionDefault()}>Humidity</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.pureWhite} />
              ) : (
                <Text style={Typhography.headerDefault()}>
                  {data?.humidity}
                </Text>
              )}
            </View>
            <View style={styles.currentWeather}>
              <Text style={Typhography.captionDefault()}>Moonrise</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.pureWhite} />
              ) : (
                <Text style={Typhography.headerDefault()}>{data.humidity}</Text>
              )}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Condition;
