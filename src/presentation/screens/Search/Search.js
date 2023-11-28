import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

// import SearchBar from '../../components/molecules/SearchBar/SearchBar';
// import KeywordHistoryList from '../../components/KeywordHistoryList';
// import ClearHistoryButton from '../../components/ClearHistoryButton';
import SearchBar from '@presentation/components/molecules/SearchBar/SearchBar';
import SearchResult from '@presentation/components/molecules/SearchResult/SearchResult';
import useViewModel from './Search.VM';

// import useViewModel from './SearchModel';

const {height} = Dimensions.get('window');

const Search = () => {
  const {
    qLocation,
    fetchedLocation,
    handleChangeText,
    handleSearch,
    selectLocation,
  } = useViewModel();
  // const renderContent = ({item, index}) => {
  //   // if (index < 10) {
  //   return (
  //     <KeywordHistoryList
  //       keyword={item}
  //       onSelect={() => {
  //         selectKeywordToSearch(item);
  //       }}
  //       onRemove={() => removeSearchKeyword(item)}
  //     />
  //   );
  // };

  // const renderFooter = () => {
  //   if (searchedKeyword.length > 0) {
  //     return <ClearHistoryButton onClear={clearSearchKeyword} />;
  //   }
  // };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#222',
        paddingTop: 30,
        paddingHorizontal: 10,
      }}>
      <SearchBar
        isEnabled={true}
        isFocus={true}
        qLocation={qLocation}
        handleSearch={handleSearch}
      />
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

const styles = StyleSheet.create({
  headerLabel: {
    flex: 9,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    fontWeight: '900',
    fontSize: 18,
  },
});
