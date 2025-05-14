import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {VInput, VText, VView} from '../../../ui';
import {Colors, Palette} from '@src/ui/colors';
import {useState} from 'react';

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

export function HomeSearch() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  const suggestions = [];
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
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}>
        <VText style={{color: Palette.black100}}>{item}</VText>
      </TouchableOpacity>
    );
  }

  return (
    <VView>
      <VInput
        style={styles.input}
        placeholder={SEARCH_PLACEHOLDER}
        onChangeText={enteredText}
        value={value}
      />
      <FlatList data={list} renderItem={renderListItem} extraData={list} />
    </VView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: Palette.white100,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 12,
  },
});
