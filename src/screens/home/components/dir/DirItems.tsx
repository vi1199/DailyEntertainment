import {VText, VView} from '@src/ui';
import {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export const DirItems = ({item, index}) => {
  console.log('item-', item);
  const [isExpandable, setExpandable] = useState(false);
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

      <FlatList data={item.children} renderItem={DirItems} />
    </VView>
  );
};
const styles = StyleSheet.create({
  container: {paddingHorizontal: 10},
  folder: {
    flexDirection: 'row',
  },
});
