import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = createJSONStorage(() => AsyncStorage);

export const languageAtom = atomWithStorage('app_language', 'en', storage);

export const themeAtom = atomWithStorage('theme', 'light', storage);
