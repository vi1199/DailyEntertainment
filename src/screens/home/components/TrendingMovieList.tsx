import {VText, VView} from '@src/ui';
import {Palette} from '@src/ui/colors';
import {StyleSheet} from 'react-native';

export function TrendingMoviesList() {
  return (
    <VView style={styles.container}>
      <VText>Here some text</VText>
    </VView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette['blue8'],
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
});
