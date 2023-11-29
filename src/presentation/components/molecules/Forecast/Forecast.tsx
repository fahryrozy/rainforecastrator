import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import {styles} from './Forecast.style';
import {Hour} from '@domain/entities';
import {Typhography} from '@core/style';

type ItemProps = {hourly_forecast: Hour; onPress: any};

const RenderedCard: React.FC<ItemProps> = ({hourly_forecast, onPress}) => (
  <TouchableOpacity style={styles.renderedCard} onPress={onPress}>
    <Text>{`${hourly_forecast.temp_c}°`}</Text>
    <Image
      source={{uri: `https:${hourly_forecast.condition.icon}`}}
      style={styles.icon}
    />
    <Text>{`${moment(hourly_forecast.time).format('h A')}`}</Text>
  </TouchableOpacity>
);

type Props = {
  data: Array<Hour>;
  date: string;
  setCurrCondition: (item: Hour) => void;
  isToday: boolean;
};

const Forecast: React.FC<Props> = ({data, date, setCurrCondition, isToday}) => {
  moment.locale('en');
  return (
    <View style={styles.forecastCard}>
      <View style={styles.title}>
        {isToday ? (
          <Text style={Typhography.headerDefault()}>
            Today's hourly forecast
          </Text>
        ) : (
          <Text style={Typhography.headerDefault()}>
            {moment(date).calendar({
              sameDay: '[Today]',
              nextDay: '[Tomorrow]',
              nextWeek: 'dddd',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'DD/MM/YYYY',
            })}
            's hourly forecast
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
