import {Text, View, Dimensions} from 'react-native';
import React from 'react';

import SearchBar from '@presentation/components/molecules/SearchBar/SearchBar';
import SearchResult from '@presentation/components/molecules/SearchResult/SearchResult';
import useViewModel from './Search.VM';
import {styles} from './Search.style';

const {height} = Dimensions.get('window');

const Search = () => {
  const {qLocation, fetchedLocation, handleSearch, selectLocation} =
    useViewModel();

  return (
    <View style={styles.container}>
      <SearchBar qLocation={qLocation} handleSearch={handleSearch} />
      <View style={styles.headerLabel}>
        {fetchedLocation.length > 0 ? (
          <SearchResult data={fetchedLocation} onSelect={selectLocation} />
        ) : (
          <View style={{height: height * 0.05}}>
            <Text style={styles.label}>Recent Search</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Search;
