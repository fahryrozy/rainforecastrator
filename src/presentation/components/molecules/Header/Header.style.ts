import {scale} from '@core/style';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  dateCard: {
    flex: 2,
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
    gap: scale(2),
  },
  dateText: {
    color: '#fff',
  },
  locCard: {
    flex: 3,
    paddingHorizontal: scale(10),
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  curLocation: {
    justifyContent: 'flex-end',
    paddingHorizontal: scale(2),
    alignItems: 'flex-end',
    textAlign: 'right',
    width: '100%',
    overflow: 'hidden',
    color: '#fff',
  },
});
export default styles;
