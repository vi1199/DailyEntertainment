import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './nav';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import './utils/i18n';
import {useAtomValue} from 'jotai';
import {languageAtom} from './atoms/languageAtom';
import i18n from './utils/i18n';
import BootSplash from 'react-native-bootsplash';

const queryClient = new QueryClient();
export const App = () => {
  const lang = useAtomValue(languageAtom);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      console.log('language--', lang);

      try {
        if (lang && i18n.language !== lang) {
          await i18n.changeLanguage(lang);
        }
      } catch (e) {
        console.error('Language sync failed:', e);
      }

      setReady(true);
      await BootSplash.hide({fade: true});
    };

    init();
  }, [lang]);
  if (!ready) {
    return null;
  }

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
