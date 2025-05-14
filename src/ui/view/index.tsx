import {SafeAreaView, ViewProps} from 'react-native';

export default function VView({children, ...args}: ViewProps) {
  return <SafeAreaView {...args}>{children}</SafeAreaView>;
}
