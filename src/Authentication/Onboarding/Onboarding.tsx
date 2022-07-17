import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Slide, { SLIDE_HEIGHT } from './Slide';
import { interpolateColor, onScrollEvent, useValue } from 'react-native-redash';
import Animated, { interpolateColors } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => {
  const x = useValue(0);

  //TODO: onScrollEvent?
  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColors(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputColorRange: ['#BFEAF5', '#002053', '#FFCC00', '#BEECC4'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.slider, backgroundColor }}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{ onScroll }}
        >
          <Slide label="Relax" />
          <Slide label="Payful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={{ flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 75 }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
