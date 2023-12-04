import React from 'react';
import LottieView from 'lottie-react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '@core/style';

export type Props = {error: Error; resetError: () => void};

const ErrorScreen: React.FC<Props> = ({error, resetError}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require('assets/lottie/something-went-wrong.json')}
        autoPlay
        loop
        style={styles.container}
      />
      <View style={styles.content}>
        {error && <Text style={styles.error}>{error.toString()}</Text>}
        <TouchableOpacity style={styles.button} onPress={resetError}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.pureWhite},

  content: {
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000',
  },
  error: {
    paddingVertical: 16,
    color: Colors.lightDark,
  },
  button: {
    backgroundColor: '#21cdce',
    borderRadius: 50,
    padding: 16,
  },
  buttonText: {
    color: Colors.pureWhite,
    fontWeight: '600',
    textAlign: 'center',
  },
});
