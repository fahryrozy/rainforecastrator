import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import iconStyle from '@core/style/Icon';
import styles from './Header.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@presentation/nav';
import DatePicker from 'react-native-date-picker';
import {LocationSearch} from '@domain/entities';

type Props = {
  loc: LocationSearch;
  onSelectDate: (item: Date) => void;
  date: Date;
  open: boolean;
  onClickDate: () => void;
};

const Header: React.FC<Props> = ({
  loc,
  onSelectDate,
  date,
  open,
  onClickDate,
}) => {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate());

  moment.locale('id');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.dateCard} onPress={onClickDate}>
        <Image
          style={[iconStyle.iconSmall]}
          source={require('../../../assets/icons/calendar.png')}
        />
        <Text style={{}}>{`${moment(date).format('ll')}`}</Text>
      </TouchableOpacity>
      {loc && (
        <TouchableOpacity
          style={styles.locCard}
          onPress={() => navigation.navigate('Search')}>
          <View style={styles.curLocation}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.curLocation}>{`${
              loc.region === '' ? '' : loc.region + ','
            } ${loc.country === '' ? '' : loc.country + ''}`}</Text>
          </View>

          <Image
            style={[iconStyle.iconSmall]}
            source={require('assets/icons/loc-icon.png')}
          />
        </TouchableOpacity>
      )}

      <DatePicker
        mode="date"
        maximumDate={nextWeek}
        minimumDate={lastWeek}
        modal
        onConfirm={onSelectDate}
        open={open}
        date={date}
        onCancel={onClickDate}
      />
    </View>
  );
};

export default Header;
