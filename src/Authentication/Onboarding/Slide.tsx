import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    // backgroundColor: 'red',
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    textAlign: 'center',
    color: '#fff',
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  children?: React.ReactNode;
}

const Slide = ({ title, right, children }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={styles.container}>
      <View style={{ ...styles.titleContainer, transform }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

export default Slide;
