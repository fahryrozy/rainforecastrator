import {scale} from '@core/style';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dateCard: {
    flex: 2,
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
    gap: scale(2),
  },
  locCard: {
    flex: 3,
    paddingHorizontal: scale(5),
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  curLocation: {
    justifyContent: 'flex-end',
    paddingHorizontal: scale(2),
    alignItems: 'flex-end',
    width: '90%',
    overflow: 'hidden',
  },
});
export default styles;
