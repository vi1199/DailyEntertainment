import {VText, VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import VIcon from '@src/ui/icons';

export function PreferencesView() {
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
          <VText style={{marginLeft: 8}}>Language</VText>
        </VView>

        <VView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
            marginHorizontal: 8,
          }}>
          <VText style={{marginRight: 8}}>English</VText>
          <VIcon
            name="chevron-right"
            size={24}
            color={Colors.Secondary['500']}
          />
        </VView>
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
