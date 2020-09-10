import React from 'react';
import { FlatList, View, Image, Animated } from 'react-native';
import { PosterList as PosterListData } from '../../declarations/types.td';
import styles from './PosterList.styles';

function PosterList({ data, scrollXAnimated }: { data: PosterListData; scrollXAnimated: Animated.Value }) {
  function getTransitionValues(index: number) {
    const inputRange = [index - 1, index, index + 1];
    const translateX = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [50, 0, -100],
    });
    const scale = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [0.8, 1, 1.3],
    });
    const opacity = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [1 - 1 / 3, 1, 0],
    });

    return {
      opacity,
      scale,
      translateX,
    };
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.title + index}
      horizontal
      inverted
      contentContainerStyle={styles.container}
      CellRendererComponent={({ item, index, children, style, ...props }) => {
        const newStyle = [style, { zIndex: data.length - index }];
        return (
          <View style={newStyle} index={index} {...props}>
            {children}
          </View>
        );
      }}
      scrollEnabled={false}
      removeClippedSubviews={false}
      renderItem={({ item, index }) => {
        const { opacity, scale, translateX } = getTransitionValues(index);
        return (
          <Animated.View style={[styles.posterWrapper, { opacity, transform: [{ translateX }, { scale }] }]}>
            <Image source={{ uri: item.poster }} style={styles.poster} />
          </Animated.View>
        );
      }}
    />
  );
}

export default PosterList;
