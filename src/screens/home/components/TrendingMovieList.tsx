import {queryKeys} from '@src/network/constants';
import {discoverMoviesList} from '@src/network/networkManager';
import {VText, VView} from '@src/ui';
import {Palette} from '@src/ui/colors';
import {useQuery} from '@tanstack/react-query';
import {FlatList, StyleSheet} from 'react-native';

export function TrendingMoviesList() {
  const {data: discoverMovies} = useQuery({
    queryKey: [queryKeys.discoverMovies],
    queryFn: discoverMoviesList,
  });
  const {results} = discoverMovies;
  const renderDiscoverMoviesItem = ({item}) => {
    return (
      <VView style={styles.discoverMovieItem}>
        <VText>{item.title}</VText>
      </VView>
    );
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
        data={results}
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
  discoverMovieItem: {
    flex: 1,
    marginVertical: 8,
    backgroundColor: Palette['yellow7'],
    marginHorizontal: 8,
    justifyContent: 'space-between',
  },
});
