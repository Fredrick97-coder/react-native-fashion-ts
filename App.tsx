import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Onboarding } from './src/Authentication';
import { LoadAssets } from './src/components';
import { Home } from './src/screens';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

export type RootStackParamList = {
  Home: String | undefined;
};

export type MainStackScreenProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Home" component={Home} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
