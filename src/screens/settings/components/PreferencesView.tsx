import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {languageAtom} from '@src/atoms/languageAtom';
import {languageNames} from '@src/locales';
import {routes} from '@src/nav/screens';
import {RootStackParamList} from '@src/nav/types';
import {VText, VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import VIcon from '@src/ui/icons';
import {useAtom} from 'jotai';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
type Props = NativeStackScreenProps<
  RootStackParamList,
  routes.LANGUAGE_SETTINGS
>;
export function PreferencesView({nav}) {
  const [language, setLanguage] = useAtom(languageAtom);
  const {t} = useTranslation();
  const gotoLanguageSettings = () => {
    nav.navigate(routes.LANGUAGE_SETTINGS);
  };
  return (
    <VView
      style={{
        marginHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.Secondary['200'],
        backgroundColor: Colors.Secondary['100'],
      }}>
      <VView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <VView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
            marginHorizontal: 8,
          }}>
          <VIcon name="languages" size={24} color={Colors.Secondary['500']} />
          <VText style={{marginLeft: 8}}>{t('settings.language')}</VText>
        </VView>

        <TouchableOpacity
          onPress={gotoLanguageSettings}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
            marginHorizontal: 8,
          }}>
          <VText style={{marginRight: 8}}>{languageNames[language]}</VText>
          <VIcon
            name="chevron-right"
            size={24}
            color={Colors.Secondary['500']}
          />
        </TouchableOpacity>
      </VView>
      <VView
        style={{
          height: 1,
          width: '94%',
          alignSelf: 'center',
          backgroundColor: Colors.Secondary['200'],
        }}
      />
      <VView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <VView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
            marginHorizontal: 8,
          }}>
          <VIcon name="palette" size={24} color={Colors.Secondary['500']} />
          <VText style={{marginLeft: 8}}>Theme</VText>
        </VView>

        <VView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
            marginHorizontal: 8,
          }}>
          <VText style={{marginRight: 8}}>Light</VText>
          <VIcon
            name="chevron-right"
            size={24}
            color={Colors.Secondary['500']}
          />
        </VView>
      </VView>
    </VView>
  );
}
