import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './SearchResult.style';
import {LocationSearch} from '@domain/entities';

type Props = {
  data: Array<LocationSearch>;
  onSelect: (loc: LocationSearch) => void;
};

const SearchResult: React.FC<Props> = ({data, onSelect}) => {
  console.log('location list => ', data);
  return (
    <View>
      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => onSelect(item)}
              style={styles.itemList}>
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
