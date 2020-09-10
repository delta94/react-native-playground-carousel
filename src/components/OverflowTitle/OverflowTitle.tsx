import React from 'react';
import { View, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { PosterList } from '../../declarations/types.td';
import styles from './OverflowTitle.styles';
import { OVERFLOW_TITLE_HEIGHT } from '../../constants';

function OverflowTitle({ data, scrollXAnimated }: { data: PosterList; scrollXAnimated: Animated.Value }) {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_TITLE_HEIGHT, 0, -OVERFLOW_TITLE_HEIGHT],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item) => (
          <View key={item.title} style={styles.itemContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <View style={styles.detailWrapper}>
              <View style={styles.locationWrapper}>
                <Icon name="map-pin" size={15} />
                <Text style={styles.locationText} numberOfLines={1}>
                  {item.location}
                </Text>
              </View>
              <View style={styles.dateWrapper}>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

export default OverflowTitle;
