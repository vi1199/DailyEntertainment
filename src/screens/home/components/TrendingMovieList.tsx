import {queryKeys} from '@src/network/constants';
import {
  apiConfiguration,
  discoverMoviesList,
} from '@src/network/networkManager';
import {VText, VView} from '@src/ui';
import {Colors, Palette} from '@src/ui/colors';
import VImage from '@src/ui/image';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {useMovieWithBackdrop} from '../hooks/useMovieWithBackdrop';
import {DiscoverMovieItem} from './DiscoverMovieItem';
import {discoverMoviesItems} from '@src/network/types/discoverMovies';

export function TrendingMoviesList() {
  const {data: configData, isLoading: isLoadingConfig} = useQuery({
    queryKey: [queryKeys.configuration],
    queryFn: apiConfiguration,
  });

  const {
    data: discoverMovies,
    isLoading: isLoadingMovies,
    isError,
  } = useQuery({
    queryKey: [queryKeys.discoverMovies],
    queryFn: discoverMoviesList,
  });

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
  console.log('movies', discoverMovies, isError, 'config:', configData);

  const renderDiscoverMoviesItem = ({item}: {item: discoverMoviesItems}) => {
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
        Trending
      </VText>
      <FlatList
        data={discoverMovies?.results}
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
