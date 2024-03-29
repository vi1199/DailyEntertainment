import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {Layout} from './components/layout/HomeLayout';
import {HomeScreenNavProps} from '@src/types/nav';
import {TrendingMoviesList} from './components/TrendingMovieList';

export const Home = ({route, navigation}: HomeScreenNavProps) => {
  return (
    <Layout>
      <TrendingMoviesList />
    </Layout>
  );
};
