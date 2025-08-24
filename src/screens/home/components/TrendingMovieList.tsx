import {queryKeys} from '@src/network/constants';
import {
  apiConfiguration,
  nowPlayingMoviesList,
} from '@src/network/networkManager';
import {VText, VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {DiscoverMovieItem} from './DiscoverMovieItem';
import {DiscoverMoviesItems} from '@src/network/types/discoverMovies';
import {useTranslation} from 'react-i18next';
import {buildImageUrl} from '@src/utils';

export function TrendingMoviesList() {
  const {t} = useTranslation();
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
  if (!configData || !nowPlayingMovies?.results) {
    return <VText>{t('common.no_data')}</VText>;
  }

  const renderDiscoverMoviesItem = ({item}: {item: DiscoverMoviesItems}) => {
    const imageBuilder = buildImageUrl(configData, item.poster_path);
    return <DiscoverMovieItem posterUrl={imageBuilder} />;
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
        {t('home.now_playing')}
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
