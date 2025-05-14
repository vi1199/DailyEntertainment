import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './nav';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
