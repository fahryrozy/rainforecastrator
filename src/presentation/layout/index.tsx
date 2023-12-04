import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Current, Location} from '@domain/entities';
import {styles} from './style';

type BaseLayoutProps = {
  children: React.ReactNode;
  data: {
    location: Location;
    current: Current;
  };
  onRefresh: () => void;
  refreshing: boolean;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  data,
  onRefresh,
  refreshing,
}) => {
  const {current} = data;
  const bg =
    current?.is_day !== 1
      ? require('assets/images/bg-night.jpg')
      : require('assets/images/bg-day.jpg');
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={styles.backgroundContainer}
        blurRadius={50}
        source={bg}
        resizeMode="cover">
        <SafeAreaView style={styles.content}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {children}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BaseLayout;
