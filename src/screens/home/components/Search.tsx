import {StyleSheet, TextInput} from 'react-native';
import {VInput, VText, VView} from '../../../ui';
import {Colors, Palette} from '@src/ui/color';

const SEARCH_PLACEHOLDER = 'Search Movies';
export function HomeSearch() {
  return (
    <VView>
      <VInput style={styles.container} placeholder={SEARCH_PLACEHOLDER} />
    </VView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.white100,
    paddingHorizontal: 10,
  },
});
