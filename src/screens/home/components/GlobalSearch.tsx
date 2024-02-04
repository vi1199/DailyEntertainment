import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {VInput, VText, VView} from '../../../ui';
import {useState} from 'react';
import {Palette} from '@src/ui/colors';

const SEARCH_PLACEHOLDER = 'Search Movies';
const array = [
  'Adam',
  'Anthony',
  'Bob',
  'Billy',
  'Carol',
  'Cathy',
  'Kevin',
  'Kyle',
  'Frank',
  'Fred',
];

export function GlobalSearch() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const suggestions: string[] | ((prevState: never[]) => never[]) = [];
  const enteredText = (text: string) => {
    setValue(text);
    array.forEach(name => {
      if (name.substring(0, text.toUpperCase().length) === text.toUpperCase()) {
        suggestions.push(name);
        setList(suggestions);
      }
    });
    if (text.length === 0) {
      setList([]);
    }
  };

  function renderListItem({item, index}) {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => setValue(item)}
        style={{
          backgroundColor: Palette.grey2,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}>
        <VText style={{color: Palette.black100}}>{item}</VText>
      </TouchableOpacity>
    );
  }
  function separator() {
    return <VView style={{height: 1, backgroundColor: Palette.grey3}} />;
  }

  return (
    <VView>
      <VInput
        style={styles.input}
        placeholder={SEARCH_PLACEHOLDER}
        onChangeText={enteredText}
        value={value}
      />
      <FlatList
        data={list}
        renderItem={renderListItem}
        extraData={list}
        ItemSeparatorComponent={separator}
      />
    </VView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: Palette.white100,
    paddingHorizontal: 16,
  },
});
