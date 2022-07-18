import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    width: 245,
  },
  label: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 15,
    textAlign: 'center',
  },
});

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? '#2CB9B0' : '#F5F5F5';
  const color = variant === 'primary' ? '#fff' : '#0C0D34';
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

export default Button;
