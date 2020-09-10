import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { PosterList } from '../../declarations/types.td';
import styles from './OverflowTitle.styles';

function OverflowTitle({ data }: { data: PosterList }) {
  return (
    <View style={styles.container}>
      <View>
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
      </View>
    </View>
  );
}

export default OverflowTitle;
