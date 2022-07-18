import { Dimensions, StyleSheet, View } from 'react-native';
import Slide, { SLIDE_HEIGHT } from './Slide';
import { onScrollEvent, useValue } from 'react-native-redash';
import Animated, { interpolateColors } from 'react-native-reanimated';
import Subslide from './Subslide';

const BORDER_RADIUS = 75;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relax',
    subtitle: 'Find Your outfits',
    description:
      "Confused about your outfilts? Don't worry!. We got you covered",
    color: '#BFEAF5',
  },
  {
    title: 'Payful',
    subtitle: 'Hear it First, Wear it first',
    description:
      'Hating the clothes in your wardrobe? Get the right clothes for the right occasion',
    color: '#002053',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description: 'Create your individual style and look amazing everyday',
    color: '#FFDDDD',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#BEECC4',
  },
];

const Onboarding = () => {
  const x = useValue(0);

  //TODO: scrollHandler useScrollHandler?
  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColors(x, {
    inputRange: slides.map((_, i) => i * width),
    outputColorRange: slides.map(({ color }) => color),
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
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View style={styles.footerContent}>
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              {...{ subtitle, description, x }}
              last={index === slides.length - 1}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
