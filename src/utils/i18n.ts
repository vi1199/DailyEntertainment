import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from '../locales/en/translation.json';
import fr from '../locales/fr/translation.json';
import hi from '../locales/hi/translation.json';

export const resources = {
  en: {translation: en},
  fr: {translation: fr},
  hi: {translation: hi},
} as const;

const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales();
  return locales[0]?.languageCode || 'en';
};

i18n.use(initReactI18next).init({
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
