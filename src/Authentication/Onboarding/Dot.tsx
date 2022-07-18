import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
});

interface DotsProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotsProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: '#2CB9B0',
          opacity,
          transform: [{ scale }],
        },
      ]}
    />
  );
};

export default Dot;
