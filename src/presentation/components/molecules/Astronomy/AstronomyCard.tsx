import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './Astronomy.styles';
import {Astronomy, Location} from '@domain/entities';

type Props = {
  data: {
    location: Location;
    astronomy: Astronomy;
  };
  isLoading: boolean;
};

const AstronomyCard: React.FC<Props> = ({data, isLoading}) => {
  return (
    <View style={styles.containerAstro}>
      <View style={styles.astroCard}>
        <Text style={styles.locText}>Sunrise</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.locText}>{data?.astronomy?.astro?.sunrise}</Text>
        )}
      </View>
      <View style={styles.astroCard}>
        <Text style={styles.locText} testID="as-title">
          Sunset
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.locText}>{data?.astronomy?.astro?.sunset}</Text>
        )}
      </View>
      <View style={styles.astroCard}>
        <Text style={styles.locText}>Moonrise</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.locText} testID="as-time">
            {data?.astronomy?.astro?.moonrise}
          </Text>
        )}
      </View>
      <View style={styles.astroCard}>
        <Text style={styles.locText}>Moonset</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.locText}>{data?.astronomy?.astro?.moonset}</Text>
        )}
      </View>
    </View>
  );
};
export default AstronomyCard;
