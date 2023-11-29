import {TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './SearchBar.styles';

type Props = {
  qLocation: string;
  handleSearch: (text: string) => void;
};

const SearchBar: React.FC<Props> = ({qLocation, handleSearch}) => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.inputStyle}>
        <View>
          <TextInput
            placeholder="Search for a city or airport"
            onChangeText={handleSearch}
            value={qLocation}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
