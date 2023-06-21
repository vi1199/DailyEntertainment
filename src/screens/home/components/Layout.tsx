import {VView} from '../../../ui';
import {Colors} from '../../../ui/color';

export function Layout({children}: {children: JSX.Element | JSX.Element[]}) {
  return (
    <VView style={{backgroundColor: Colors.Secondary['50'], flex: 1}}>
      {children}
    </VView>
  );
}
