import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import {styles} from './Forecast.style';
import {Hour} from '@domain/entities';
import {Typhography} from '@core/style';

type ItemProps = {hourly_forecast: Hour; onPress: any};

const RenderedCard = ({hourly_forecast, onPress}: ItemProps) => (
  <TouchableOpacity style={styles.renderedCard} onPress={onPress}>
    <Text>{`${hourly_forecast.temp_c}°`}</Text>
    <Image
      source={{uri: `https:${hourly_forecast.condition.icon}`}}
      style={styles.icon}
    />
    <Text>{`${moment(hourly_forecast.time).format('h A')}`}</Text>
  </TouchableOpacity>
);

const Forecast = ({data, date, setCurrCondition}) => {
  moment.locale('en');
  return (
    <View style={styles.forecastCard}>
      <View style={styles.title}>
        {data && (
          <Text style={Typhography.headerDefault()}>
            {moment(date).format('L')}'s forecast
          </Text>
        )}
      </View>
      <View style={styles.content}>
        {data && (
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => (
              <RenderedCard
                hourly_forecast={item}
                onPress={() => setCurrCondition(item)}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};
export default Forecast;
