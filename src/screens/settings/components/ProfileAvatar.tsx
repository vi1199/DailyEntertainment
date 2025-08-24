import {VText, VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import VIcon from '@src/ui/icons';

export function ProfileAvatar() {
  return (
    <VView
      style={{
        margin: 16,
        flexDirection: 'row',
      }}>
      <VView
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: Colors.Secondary['100'],
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <VIcon name="user" size={28} color={Colors.Secondary['500']} />
      </VView>
      <VView
        style={{
          marginLeft: 16,
          marginVertical: 8,

          justifyContent: 'space-between',
        }}>
        <VText style={{fontSize: 20, fontWeight: 'bold'}}>John Doe</VText>
        <VText style={{color: '#666'}}>@johndoe</VText>
      </VView>
    </VView>
  );
}
