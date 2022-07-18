import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '../../components';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'SFProText-Semibold',
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#0C0D34',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});

interface SublideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SublideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
