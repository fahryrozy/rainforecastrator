import {currHeight, currWidth} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBar: {
    paddingTop: 5,
    paddingBottom: 20,
    paddingHorizontal: 1,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconWrapper: {
    top: 10,
    width: currWidth * 0.1,
    height: currHeight * 0.065,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    top: 10,
    width: currWidth * 0.935,
    height: currHeight * 0.065,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: '#333',
  },
  inputStyleActive: {
    top: 10,
    width: currWidth * 0.865,
    height: currHeight * 0.065,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: '#fff',
  },
});
