import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './RecentSearch.style';
import {LocationSearch} from '@domain/entities';

type Props = {
  data: Array<LocationSearch>;
  onSelect: (loc: LocationSearch) => void;
};

const RecentSearch: React.FC<Props> = ({data, onSelect}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Recent Search</Text>
      {data && (
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <ScrollView style={styles.container}>
              {index < 10 && (
                <TouchableOpacity
                  onPress={() => onSelect(item)}
                  style={styles.itemList}>
                  <Text style={styles.locList}>
                    {item.name !== '' ? item.name + ', ' : ''}
                    {item.region !== '' ? item.region + ', ' : ''}
                    {item.country !== '' ? item.country : ''}
                  </Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          )}
        />
      )}
    </View>
  );
};

export default RecentSearch;
