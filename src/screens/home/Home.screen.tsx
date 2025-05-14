import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {Layout} from './components/Layout';
import {HomeSearch} from './components/Search';
import {ActivityIndicator} from 'react-native';
import {VView} from '@src/ui';
import Config from 'react-native-config';
import {Colors} from '@src/ui/colors';
import {useQuery} from '@tanstack/react-query';
import {authenticateApp, discoverMoviesList} from '@src/network/networkManager';
import {queryKeys} from '@src/network/constants';
import {TrendingMoviesList} from './components/TrendingMovieList';

type Props = NativeStackScreenProps<RootStackParamList, routes.HOME>;
export const Home = ({route, navigation}: Props) => {
  const {isLoading: isLoadingMovies} = useQuery({
    queryKey: [queryKeys.discoverMovies],
    queryFn: discoverMoviesList,
  });

  if (isLoadingMovies) {
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
      <HomeSearch />
      <TrendingMoviesList />
    </VView>
  );
};
