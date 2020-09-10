import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SafeAreaView, Animated, View } from 'react-native';
import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler';
import posterListData from '../assets/data';
import OverflowTitle from '../components/OverflowTitle/OverflowTitle';
import styles from './App.styles';
import PosterList from '../components/PosterList/PosterList';

const App = () => {
  const [data] = useState(posterListData);
  const [index, setIndex] = useState(0);
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  }, [scrollXIndex]);

  const setActiveIndex = useCallback((activeIndex: number) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  }, []);

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }

          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }

            setActiveIndex(index - 1);
          }
        }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <OverflowTitle data={data} scrollXAnimated={scrollXAnimated} />
            <PosterList data={data} scrollXAnimated={scrollXAnimated} />
          </View>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default App;
