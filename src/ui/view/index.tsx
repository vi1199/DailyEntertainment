import {View, ViewProps} from 'react-native';

export default function VView({children, ...args}: ViewProps) {
  return <View {...args}>{children}</View>;
}
