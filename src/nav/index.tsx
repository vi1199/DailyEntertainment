import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Home} from '../screens/home/Home.screen';
import {routes} from './screens';

const navOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name={routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return <HomeNavigator />;
};
