import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import iconStyle from '@core/style/Icon';
import styles from './Header.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@presentation/nav';
import DatePicker from 'react-native-date-picker';
import {useEffect, useState} from 'react';

const Header = ({data, onSelectDate, date, open, onClickDate}) => {
  console.log('date dari header => ', date + ' ' + open);
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
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
        <Text style={{}}>{`${moment(
          data?.location?.localtime,
          'YYYY-MM-DD H:m',
        ).format('ll')}`}</Text>
      </TouchableOpacity>
      {data && (
        <TouchableOpacity
          style={styles.locCard}
          onPress={() => navigation.navigate('Search')}>
          <View style={styles.curLocation}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{
                textAlign: 'center',
                height: 20,
              }}>{`${
              data.location.region == '' ? '' : data.location.region + ', '
            } ${
              data.location.country == '' ? '' : data.location.country + ''
            }`}</Text>
          </View>

          <Image
            style={[iconStyle.iconSmall]}
            source={require('../../../assets/icons/loc-icon.png')}
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
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default Header;
