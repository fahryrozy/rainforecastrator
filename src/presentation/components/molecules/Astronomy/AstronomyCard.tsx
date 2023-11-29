import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Astronomy.styles';
import {Astronomy, Location} from '@domain/entities';

type Props = {
  data:
    | {
        location: Location;
        astronomy: Astronomy;
      }
    | undefined;
};

const AstronomyCard: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.containerAstro}>
      <View style={styles.astroCard}>
        <Text style={styles.locText}>Sunrise</Text>
        <Text style={styles.locText}>{data?.astronomy?.astro?.sunrise}</Text>
      </View>
      <View style={styles.astroCard}>
        <Text style={styles.locText}>Sunset</Text>
        <Text style={styles.locText}>{data?.astronomy?.astro?.sunset}</Text>
      </View>
      <View style={styles.astroCard}>
        <Text style={styles.locText}>Moonrise</Text>
        <Text style={styles.locText}>{data?.astronomy?.astro?.moonrise}</Text>
      </View>
      <View style={styles.astroCard}>
        <Text style={styles.locText}>Moonset</Text>
        <Text style={styles.locText}>{data?.astronomy?.astro?.moonset}</Text>
      </View>
    </View>
  );
};
export default AstronomyCard;
