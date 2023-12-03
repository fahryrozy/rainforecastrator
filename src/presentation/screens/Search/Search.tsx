import {View} from 'react-native';
import React from 'react';

import SearchBar from '@presentation/components/molecules/SearchBar/SearchBar';
import SearchResult from '@presentation/components/molecules/SearchResult/SearchResult';
import useViewModel from './Search.VM';
import {styles} from './Search.style';
import RecentSearch from '@presentation/components/molecules/RecentSearch/RecentSearch';

const Search = () => {
  const {
    qLocation,
    fetchedLocation,
    handleSearch,
    selectLocation,
    reselectLocation,
    recentSearch,
  } = useViewModel();

  return (
    <View style={styles.container}>
      <SearchBar qLocation={qLocation} handleSearch={handleSearch} />
      <View style={styles.headerLabel}>
        {fetchedLocation.length > 0 ? (
          <SearchResult data={fetchedLocation} onSelect={selectLocation} />
        ) : (
          <RecentSearch
            data={recentSearch.locationList}
            onSelect={reselectLocation}
          />
        )}
      </View>
    </View>
  );
};

export default Search;
