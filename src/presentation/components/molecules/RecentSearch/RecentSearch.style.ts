import {scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  itemList: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
    minHeight: scale(50),
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontWeight: '900',
    fontSize: 18,
    color: '#fff',
  },
  locList: {
    color: '#fff',
  },
});
