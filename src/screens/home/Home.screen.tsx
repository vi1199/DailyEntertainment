import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {Layout} from './components/Layout';
import {HomeSearch} from './components/Search';
import {useGetTodosQuery} from '@src/services/api.slice';
import {ActivityIndicator} from 'react-native';
import {VView} from '@src/ui';

type Props = NativeStackScreenProps<RootStackParamList, routes.HOME>;
export const Home = ({route, navigation}: Props) => {
  const {data, isLoading} = useGetTodosQuery('args');

  return (
    <Layout>
      {isLoading ? (
        <VView
          style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <ActivityIndicator />
        </VView>
      ) : (
        <HomeSearch />
      )}
    </Layout>
  );
};
