import {scale} from '@core/style';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },

  dateCard: {
    flex: 1,
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
    gap: scale(2),
  },
  locCard: {
    flex: 2,
    paddingHorizontal: scale(2),
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  curLocation: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    width: scale(175),
    overflow: 'hidden',
  },
});
export default styles;
