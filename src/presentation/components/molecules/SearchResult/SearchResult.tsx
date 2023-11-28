import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {locationStore} from '@core/config/store/slice/locationSlice';

const SearchResult = ({data, onSelect}) => {
  console.log('location list => ', data);
  return (
    <View>
      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => onSelect(item)}
              style={{
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                paddingVertical: 10,
              }}>
              <Text>
                {item.name !== '' ? item.name + ', ' : ''}
                {item.region !== '' ? item.region + ', ' : ''}
                {item.country !== '' ? item.country : ''}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SearchResult;
