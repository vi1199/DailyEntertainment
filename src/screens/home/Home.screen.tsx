import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {Layout} from './components/Layout';
import {HomeSearch} from './components/Search';

type Props = NativeStackScreenProps<RootStackParamList, routes.HOME>;
export const Home = ({route, navigation}: Props) => {
  return (
    <Layout>
      <HomeSearch />
    </Layout>
  );
};
