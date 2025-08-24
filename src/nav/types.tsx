import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {routes} from './screens';

export type RootStackParamList = {
  [routes.HOME]: undefined;
  [routes.SETTINGS]: undefined;
  [routes.LANGUAGE_SETTINGS]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
