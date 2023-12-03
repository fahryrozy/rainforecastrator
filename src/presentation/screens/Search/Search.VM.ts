import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@core/config/store/hooks';
import container from '@di/inversify.config';
import {LocationUseCase} from '@domain/useCases/searchLocUseCase';
import {LocationSearch} from '@domain/entities';
import {
  setLocation,
  saveSearchedLocation,
  locationStore,
} from '@core/config/store/slice/locationSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@presentation/nav';

const SearchVM = () => {
  const [qLocation, setQLocation] = useState('');
  const [fetchedLocation, setFetchedLocation] = useState<Array<LocationSearch>>(
    [],
  );
  const recentSearch = useAppSelector(locationStore);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const handleSearch = async (text: string) => {
    setQLocation(text);
    if (text.length >= 3) {
      const resolve = container.resolve(LocationUseCase);
      const res = await resolve.execute(text);
      setFetchedLocation(res);
    }
  };
  const selectLocation = (location: LocationSearch) => {
    dispatch(setLocation({locationList: [], selectedLocation: location}));
    dispatch(
      saveSearchedLocation({locationList: [], selectedLocation: location}),
    );
    navigation.goBack();
  };

  const reselectLocation = (location: LocationSearch) => {
    dispatch(setLocation({locationList: [], selectedLocation: location}));
    navigation.goBack();
  };
  return {
    qLocation,
    fetchedLocation,
    handleSearch,
    selectLocation,
    reselectLocation,
    recentSearch,
  };
};

export default SearchVM;
