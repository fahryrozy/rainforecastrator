import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './ConditionCard.style';
import moment from 'moment';
import {Typhography} from '@core/style';
import {Hour} from '@domain/entities';

type Props = {
  data: Hour | undefined;
  isLoading: boolean;
};

const Condition: React.FC<Props> = ({data, isLoading}) => {
  return (
    <View>
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
              <Text style={styles.label}>Temp</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.value}>{data?.temp_c}</Text>
              )}
            </View>
            <View style={styles.currentWeather}>
              <Text style={styles.label}>Wind Dir</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.value}>{data?.wind_dir}</Text>
              )}
            </View>
            <View style={styles.currentWeather}>
              <Text style={styles.label}>Humidity</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.value}>{data?.humidity}</Text>
              )}
            </View>
            <View style={styles.currentWeather}>
              <Text style={styles.label}>Moonrise</Text>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.value}>{data.humidity}</Text>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Condition;
