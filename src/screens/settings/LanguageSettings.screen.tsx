import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {languageAtom} from '@src/atoms/languageAtom';
import {languageNames} from '@src/locales';
import {routes} from '@src/nav/screens';
import {RootStackParamList} from '@src/nav/types';
import {VText, VView} from '@src/ui';
import AppHeader from '@src/ui/AppHeader';
import {Colors} from '@src/ui/colors';
import VIcon from '@src/ui/icons';
import i18n from '@src/utils/i18n';
import {useAtom} from 'jotai';
import {useTranslation} from 'react-i18next';
import {FlatList, TouchableOpacity} from 'react-native';

type Props = NativeStackScreenProps<
  RootStackParamList,
  routes.LANGUAGE_SETTINGS
>;
function LanguageSettings({navigation}: Props) {
  const [language, setLanguage] = useAtom(languageAtom);
  const {t} = useTranslation();
  const languageCodes = Object.keys(languageNames) as Array<
    keyof typeof languageNames
  >;
  const onBackPress = () => {
    navigation.goBack();
  };
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('item', item);
          setLanguage(item);
        }}
        style={{
          margin: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <VText style={{padding: 12}}>{languageNames[item]}</VText>
        {i18n.language === item ? (
          <VIcon name="check" size={24} color={Colors.Secondary['500']} />
        ) : null}
      </TouchableOpacity>
    );
  };
  const renderSeparator = () => (
    <VView
      style={{
        height: 1,
        backgroundColor: Colors.Secondary['200'],
        marginHorizontal: 12,
      }}
    />
  );
  return (
    <VView style={{flex: 1, backgroundColor: Colors.Secondary['50']}}>
      <AppHeader
        showBackButton
        onBackPress={onBackPress}
        backgroundColor={Colors.Secondary['50']}
        title={t('settings.language')}
      />
      <VText style={{marginTop: 16, marginHorizontal: 16}}>
        {t('settings.selected_your_preferred_language')}
      </VText>
      <FlatList
        data={languageCodes}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={{
          margin: 16,
          padding: 8,
          borderRadius: 12,
          backgroundColor: Colors.Secondary['100'],
          borderWidth: 1,
          borderColor: Colors.Secondary['200'],
        }}
        keyExtractor={item => item.toString()}
      />
    </VView>
  );
}
export default LanguageSettings;
