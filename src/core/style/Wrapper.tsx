import {FlexStyle} from 'react-native';
import {scale} from './Scale';

export const Wrapper = {
  ContainerRow: (): FlexStyle => ({
    flex: 1,
    flexDirection: 'row',
  }),
  ContainerColumn: (): FlexStyle => ({
    flex: 1,
    marginVertical: scale(5),
  }),
};
