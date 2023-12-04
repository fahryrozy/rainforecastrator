import {Colors, scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemList: {
    borderBottomColor: Colors.paleWhite,
    borderBottomWidth: 1,
    paddingVertical: 10,
    minHeight: scale(50),
    flex: 1,
    justifyContent: 'center',
  },
  locList: {
    color: Colors.pureWhite,
  },
});
