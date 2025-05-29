import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {HomeSearch} from './components/Search';
import {VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {TrendingMoviesList} from './components/TrendingMovieList';
import AppHeader from '@src/ui/AppHeader';
import VIcon from '@src/ui/icons';

type Props = NativeStackScreenProps<RootStackParamList, routes.HOME>;
export const Home = ({route, navigation}: Props) => {
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
