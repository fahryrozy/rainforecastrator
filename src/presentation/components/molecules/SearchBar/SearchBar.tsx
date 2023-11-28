import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import React from 'react';
import useViewModel from './SearchBar.VM';
import {styles} from './SearchBar.styles';

const {width, height} = Dimensions.get('window');

const SearchBar = ({qLocation, handleSearch}) => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.inputStyle}>
        <View>
          <TextInput
            placeholder="Search for a city or airport"
            onSubmitEditing={handleSearch}
            onChangeText={handleSearch}
            value={qLocation}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
