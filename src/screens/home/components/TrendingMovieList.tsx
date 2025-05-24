import {queryKeys} from '@src/network/constants';
import {
  apiConfiguration,
  discoverMoviesList,
  nowPlayingMoviesList,
} from '@src/network/networkManager';
import {VText, VView} from '@src/ui';
import {Colors, Palette} from '@src/ui/colors';
import VImage from '@src/ui/image';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {DiscoverMovieItem} from './DiscoverMovieItem';
import {DiscoverMoviesItems} from '@src/network/types/discoverMovies';

export function TrendingMoviesList() {
  const {data: configData, isLoading: isLoadingConfig} = useQuery({
    queryKey: [queryKeys.configuration],
    queryFn: apiConfiguration,
  });

  const {
    data: nowPlayingMovies,
    isLoading: isLoadingMovies,
    isError,
  } = useQuery({
    queryKey: [queryKeys.nowPlayingMovies],
    queryFn: nowPlayingMoviesList,
  });

  console.log('api--', configData, nowPlayingMovies);

  if (isLoadingMovies || isLoadingConfig) {
    return (
      <VView style={{flex: 1, backgroundColor: Colors.Secondary['50']}}>
        <VView
          style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <ActivityIndicator />
        </VView>
      </VView>
    );
  }
  console.log('movies', nowPlayingMovies, isError, 'config:', configData);

  const renderDiscoverMoviesItem = ({item}: {item: DiscoverMoviesItems}) => {
    return <DiscoverMovieItem movie={item} imageData={configData} />;
  };
  return (
    <VView style={styles.container}>
      <VText
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginHorizontal: 8,
          marginVertical: 8,
        }}>
        Now Playing
      </VText>
      <FlatList
        data={nowPlayingMovies?.results}
        renderItem={renderDiscoverMoviesItem}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </VView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
});
