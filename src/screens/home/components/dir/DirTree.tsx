import {FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {VInput, VText, VView} from '../../../../ui';
import {Palette} from '@src/ui/color';
import {treeItems} from '@src/utils/contants';
import {DirItems} from './DirItems';
import {useState} from 'react';

export function HomeDir() {
  const [isExpandable, setExpandable] = useState(false);
  const DirItems = ({item, index}) => {
    console.log('item-', item);

    return (
      <VView style={styles.container}>
        {
          <TouchableOpacity
            style={styles.folder}
            onPress={() => setExpandable(!isExpandable)}>
            <VText style={{color: 'black', fontSize: 14}}>
              {item.children && '+ '}
            </VText>

            <VText>{item.name}</VText>
          </TouchableOpacity>
        }

        {isExpandable && (
          <FlatList data={item.children} renderItem={DirItems} />
        )}
      </VView>
    );
  };
  const styles = StyleSheet.create({
    container: {paddingHorizontal: 10},
    folder: {
      flexDirection: 'row',
    },
  });

  return (
    <VView>
      <FlatList data={treeItems.children} renderItem={DirItems} />
    </VView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.white100,
    paddingHorizontal: 10,
  },
});
