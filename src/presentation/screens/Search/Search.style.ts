import {Colors} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightDark,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  headerLabel: {
    flex: 9,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: Colors.pureWhite,
  },
  label: {
    fontWeight: '900',
    fontSize: 18,
    color: Colors.pureWhite,
  },
});
