import React from 'react';
import LottieView from 'lottie-react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
  container: {flex: 1, backgroundColor: '#fff'},

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
    color: '#222',
  },
  button: {
    backgroundColor: '#21cdce',
    borderRadius: 50,
    padding: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});
