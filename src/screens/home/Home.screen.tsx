import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {HomeSearch} from './components/Search';
import {ActivityIndicator} from 'react-native';
import {VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {useQuery} from '@tanstack/react-query';
import {apiConfiguration} from '@src/network/networkManager';
import {queryKeys} from '@src/network/constants';
import {TrendingMoviesList} from './components/TrendingMovieList';
import AppHeader from '@src/ui/AppHeader';
import VIcon from '@src/ui/icons';

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
  const rightIcons = [
    {
      icon: <VIcon name="settings" color={Colors.Secondary['500']} size={24} />,
      onPress: () => navigation.navigate(routes.SETTINGS),
    },
  ];

  return (
    <VView style={{flex: 1, backgroundColor: Colors.Secondary['50']}}>
      <AppHeader
        backgroundColor={Colors.Secondary['50']}
        rightIcons={rightIcons}
      />
      <HomeSearch />
      <TrendingMoviesList />
    </VView>
  );
};
