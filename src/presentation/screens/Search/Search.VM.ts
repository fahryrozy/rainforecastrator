import {useState} from 'react';
import {useAppDispatch} from '@core/config/store/hooks';
import container from '@di/inversify.config';
import {LocationUseCase} from '@domain/useCases/searchLocUseCase';
import {LocationSearch} from '@domain/entities';
import {setLocation} from '@core/config/store/slice/locationSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@presentation/nav';

const SearchVM = () => {
  const [qLocation, setqLocation] = useState<string>('');
  const [fetchedLocation, setFetchedLocation] = useState<Array<LocationSearch>>(
    [],
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const handleChangeText = (text: string) => setqLocation(text);
  const handleSearch = async (text: string) => {
    setqLocation(text);
    if (text.length >= 3) {
      const resolve = container.resolve(LocationUseCase);
      const res = await resolve.execute(text);
      setFetchedLocation(res);
      console.log('search => ', res);
    }
  };
  const selectLocation = (location: LocationSearch) => {
    console.log('selected location => ', location);
    dispatch(setLocation({locationList: [], selectedLocation: location}));
    navigation.goBack();
  };
  return {
    qLocation,
    fetchedLocation,
    handleChangeText,
    handleSearch,
    selectLocation,
  };
};

export default SearchVM;
