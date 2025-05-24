import {Dimensions, Platform, StatusBar} from 'react-native';

export const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 0;

export const {width: SCREEN_WIDTH} = Dimensions.get('window');
export const MOVIELIST_COLUMN_COUNT = 2;
export const MOVIE_ITEM_WIDTH = (SCREEN_WIDTH - 32) / MOVIELIST_COLUMN_COUNT;
