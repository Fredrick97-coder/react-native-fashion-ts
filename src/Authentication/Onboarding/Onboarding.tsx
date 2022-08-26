import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Slide, { SLIDE_HEIGHT } from './Slide';
import { onScrollEvent, useScrollHandler, useValue } from 'react-native-redash';
import Animated, {
  divide,
  interpolateColors,
  multiply,
} from 'react-native-reanimated';
import Subslide from './Subslide';
import Dot from './Dot';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProp } from '../../../App';

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
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: BORDER_RADIUS,

    // backgroundColor: 'rgba(200,100,50,0.05)',
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
  const scroll = useRef<Animated.ScrollView>(null);

  const navigation = useNavigation<MainStackScreenProp>();

  //TODO: scrollHandler useScrollHandler?
  // const onScroll = onScrollEvent({ x });
  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColors(x, {
    inputRange: slides.map((_, i) => i * width),
    outputColorRange: slides.map(({ color }) => color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.slider, backgroundColor }}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
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
        <View style={{ ...styles.footerContent }}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                  if (index === slides.length - 1) {
                    return navigation.navigate('Home');
                  }
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
