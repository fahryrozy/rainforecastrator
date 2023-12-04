import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import {styles} from './Forecast.style';
import {Hour} from '@domain/entities';
import {Colors, Typhography} from '@core/style';
import {Wrapper} from '@core/style/Wrapper';
import IconStyle from '@core/style/Icon';

type ItemProps = {hourly_forecast: Hour; onPress: any; isLoading: boolean};

const RenderedCard: React.FC<ItemProps> = ({
  hourly_forecast,
  onPress,
  isLoading,
}) => (
  <>
    {isLoading ? (
      <View style={styles.renderedCard}>
        <ActivityIndicator size="small" color={Colors.pureWhite} />
      </View>
    ) : (
      <TouchableOpacity style={styles.renderedCard} onPress={onPress}>
        <Text
          style={Typhography.bodyDefault()}
          testID="fc-temp">{`${hourly_forecast.temp_c}°`}</Text>
        <Image
          source={{uri: `https:${hourly_forecast.condition.icon}`}}
          style={IconStyle.iconMedium}
          testID="fc-img"
        />
        <Text style={[Typhography.bodyDefault()]} testID="fc-time">{`${moment(
          hourly_forecast.time,
        ).format('h A')}`}</Text>
      </TouchableOpacity>
    )}
  </>
);

type Props = {
  data: Array<Hour>;
  date: string;
  setCurrCondition: (item: Hour) => void;
  isToday: boolean;
  isLoading: boolean;
};

const Forecast: React.FC<Props> = ({
  data,
  date,
  setCurrCondition,
  isToday,
  isLoading,
}) => {
  moment.locale('en');
  return (
    <View style={Wrapper.ContainerColumn()}>
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
                isLoading={isLoading}
                onPress={() => setCurrCondition(item)}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
export default Forecast;
