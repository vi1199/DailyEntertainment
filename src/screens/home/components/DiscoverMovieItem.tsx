import {MOVIE_ITEM_WIDTH} from '@src/utils';
import {VText, VView} from '@src/ui';
import VImage from '@src/ui/image';
import {ImageBackground, StyleSheet} from 'react-native';
import {Colors, Palette} from '@src/ui/colors';
import {ApiConfig} from '@src/network/types/apiConfig';
import {DiscoverMoviesItems} from '@src/network/types/discoverMovies';
import React from 'react';

export const DiscoverMovieItem = React.memo(function DiscoverMovieItem({
  posterUrl,
}: {
  posterUrl: string | null;
}) {
  const itemHeight = MOVIE_ITEM_WIDTH * 1.5;

  console.log('DiscoverMovieItem', posterUrl);

  return (
    <VView style={styles.discoverMovieItem}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: posterUrl}}
        imageStyle={{borderRadius: 12}}
        style={{
          height: itemHeight,
          width: MOVIE_ITEM_WIDTH,
          justifyContent: 'flex-end',
        }}></ImageBackground>
    </VView>
  );
});

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
