import {StyleSheet} from 'react-native';
import {VView} from '../../../ui';
import {Colors} from '../../../ui/color';

export function Layout({children}: {children: JSX.Element | JSX.Element[]}) {
  return <VView style={styles.container}>{children}</VView>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Secondary['50'],
    flex: 1,
  },
});
