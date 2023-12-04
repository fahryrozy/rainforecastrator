import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './Astronomy.styles';
import {Astronomy, Location} from '@domain/entities';
import {Colors, Typhography} from '@core/style';
import {Wrapper} from '@core/style/Wrapper';

type Props = {
  data: {
    location: Location;
    astronomy: Astronomy;
  };
  isLoading: boolean;
};

const AstronomyCard: React.FC<Props> = ({data, isLoading}) => {
  return (
    <View style={[styles.containerAstro, Wrapper.ContainerRow()]}>
      <View style={styles.astroCard}>
        <Text style={Typhography.captionDefault()}>Sunrise</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.pureWhite} />
        ) : (
          <Text style={Typhography.bodyDefault()}>
            {data?.astronomy?.astro?.sunrise}
          </Text>
        )}
      </View>
      <View style={styles.astroCard}>
        <Text style={Typhography.captionDefault()} testID="as-title">
          Sunset
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.pureWhite} />
        ) : (
          <Text style={Typhography.bodyDefault()}>
            {data?.astronomy?.astro?.sunset}
          </Text>
        )}
      </View>
      <View style={styles.astroCard}>
        <Text style={Typhography.captionDefault()}>Moonrise</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.pureWhite} />
        ) : (
          <Text style={Typhography.bodyDefault()} testID="as-time">
            {data?.astronomy?.astro?.moonrise}
          </Text>
        )}
      </View>
      <View style={styles.astroCard}>
        <Text style={Typhography.captionDefault()}>Moonset</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.pureWhite} />
        ) : (
          <Text style={Typhography.bodyDefault()}>
            {data?.astronomy?.astro?.moonset}
          </Text>
        )}
      </View>
    </View>
  );
};
export default AstronomyCard;
