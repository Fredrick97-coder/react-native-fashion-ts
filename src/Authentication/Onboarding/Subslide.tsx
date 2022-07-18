import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'SFProText-Semibold',
    color: '#0C0D34',
  },
  description: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#0C0D34',
    lineHeight: 24,
  },
});

interface SublideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  x: Animated.Node<number>;
}

const Subslide = ({ subtitle, description, x, last }: SublideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Subslide;
