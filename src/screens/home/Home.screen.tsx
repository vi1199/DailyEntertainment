import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {Layout} from './components/Layout';
import {HomeSearch} from './components/Search';
import {ActivityIndicator, View} from 'react-native';
import {VView} from '@src/ui';
import Config from 'react-native-config';
import {Colors} from '@src/ui/colors';
import {useQuery} from '@tanstack/react-query';
import {
  apiConfiguration,
  authenticateApp,
  discoverMoviesList,
} from '@src/network/networkManager';
import {queryKeys} from '@src/network/constants';
import {TrendingMoviesList} from './components/TrendingMovieList';
import AppHeader from '@src/ui/AppHeader';

type Props = NativeStackScreenProps<RootStackParamList, routes.HOME>;
export const Home = ({route, navigation}: Props) => {
  const {data: configData, isLoading: isLoadingConfig} = useQuery({
    queryKey: [queryKeys.configuration],
    queryFn: apiConfiguration,
  });

  if (isLoadingConfig) {
    return (
      <VView style={{flex: 1, backgroundColor: Colors.Secondary['50']}}>
        <VView
          style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <ActivityIndicator />
        </VView>
      </VView>
    );
  }

  return (
    <VView style={{flex: 1, backgroundColor: Colors.Secondary['50']}}>
      <AppHeader backgroundColor={Colors.Secondary['50']} />
      <HomeSearch />
      <TrendingMoviesList />
    </VView>
  );
};
