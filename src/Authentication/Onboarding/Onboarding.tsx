import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Slide from './Slide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    flex: 0.61,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView horizontal>
          <Slide label="Vxim" />
          <Slide label="Vxim" />
          <Slide label="Vxim" />
          <Slide label="Vxim" />
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default Onboarding;
