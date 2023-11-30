import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

const OfflineScreen = () => {
  return (
    <LottieView
      source={require('assets/lottie/lost-connection.json')}
      autoPlay
      loop
      style={styles.container}
    />
  );
};

export default OfflineScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
