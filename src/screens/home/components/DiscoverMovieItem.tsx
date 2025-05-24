import {MOVIE_ITEM_WIDTH} from '@src/utils';
import {VText, VView} from '@src/ui';
import VImage from '@src/ui/image';
import {ImageBackground, StyleSheet} from 'react-native';
import {Colors, Palette} from '@src/ui/colors';
import {ApiConfig} from '@src/network/types/apiConfig';
import {DiscoverMoviesItems} from '@src/network/types/discoverMovies';

export function DiscoverMovieItem({
  movie,
  imageData,
}: {
  movie: DiscoverMoviesItems;
  imageData: ApiConfig;
}) {
  const {
    secure_base_url,
    logo_sizes,
    poster_sizes,
    profile_sizes,
    backdrop_sizes,
    still_sizes,
  } = imageData.images;

  const backdropUrl = `${secure_base_url}${poster_sizes[3]}${movie.poster_path}`;

  const itemHeight = MOVIE_ITEM_WIDTH * 1.5;

  console.log('DiscoverMovieItem', movie.backdrop_path, backdropUrl);

  return (
    <VView style={styles.discoverMovieItem}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: backdropUrl}}
        imageStyle={{borderRadius: 12}}
        style={{
          height: itemHeight,
          width: MOVIE_ITEM_WIDTH,
          justifyContent: 'flex-end',
        }}></ImageBackground>
    </VView>
  );
}

const styles = StyleSheet.create({
  discoverMovieItem: {
    flex: 1,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: Palette['black5'],
    marginHorizontal: 8,
    justifyContent: 'space-between',
  },
});
