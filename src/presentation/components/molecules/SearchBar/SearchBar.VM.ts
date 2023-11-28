import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@core/config/store/hooks';
import container from '@di/inversify.config';
import {LocationUseCase} from '@domain/useCases/searchLocUseCase';
import {Location} from '@domain/entities';

const SearchBarVM = () => {
  const [qLocation, setqLocation] = useState<string>('');
  const [fetchedLocation, setFetchedLocation] = useState<Location[]>([]);
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
  return {
    qLocation,
    handleChangeText,
    handleSearch,
  };
};

export default SearchBarVM;
