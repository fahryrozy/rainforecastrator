import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useAppSelector} from '@core/config/store/hooks';
import {currentStore} from '@core/config/store/slice/currentWeatherSlice';
import {Current, Location} from '@domain/entities';
type BaseLayoutProps = {
  children: React.ReactNode;
  data: {
    location: Location;
    current: Current;
  };
};

const BaseLayout: React.FC<BaseLayoutProps> = ({children, data}) => {
  const {current} = data;
  const bg =
    current?.is_day !== 1
      ? require('../assets/images/bg-night.jpg')
      : require('../assets/images/bg-day.jpg');
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 50,
          paddingBottom: 5,
        }}
        blurRadius={50}
        source={bg}
        resizeMode="cover">
        <SafeAreaView style={{height: '100%', overflow: 'hidden'}}>
          <ScrollView style={{rowGap: 10, gap: 10}}>{children}</ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BaseLayout;
