import {Colors, currHeight, currWidth} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 5,
  },
  content: {height: '100%', overflow: 'hidden'},
  inputStyle: {
    top: 10,
    width: currWidth * 0.935,
    height: currHeight * 0.065,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: Colors.lightDarker,
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
    backgroundColor: Colors.pureWhite,
  },
});
