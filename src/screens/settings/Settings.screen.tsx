import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {routes} from '@src/nav/screens';
import {RootStackParamList} from '@src/nav/types';
import {VText, VView} from '@src/ui';
import AppHeader from '@src/ui/AppHeader';
import {Colors} from '@src/ui/colors';
import {View} from 'react-native';
import {ProfileAvatar} from './components/ProfileAvatar';
import {PreferencesView} from './components/PreferencesView';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<RootStackParamList, routes.SETTINGS>;
function SettingScreen({route, navigation}: Props) {
  const {t} = useTranslation();
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <VView style={{flex: 1, backgroundColor: Colors.Secondary['50']}}>
      <AppHeader
        showBackButton
        onBackPress={onBackPress}
        backgroundColor={Colors.Secondary['50']}
        title={t('settings.settings_title')}
      />
      <ProfileAvatar />
      <VView style={{margin: 16}}>
        <VText>Preferences</VText>
      </VView>
      <PreferencesView nav={navigation} />
    </VView>
  );
}
export default SettingScreen;
