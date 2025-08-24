import Icon from '@react-native-vector-icons/lucide';
import {TextProps, TouchableOpacity, View, ViewProps} from 'react-native';

export default function VIcon({
  name,
  size,
  color,
  iconStyle,
  ...args
}: VIconProps) {
  const AppIcon = <Icon name={name} size={size} color={color} />;

  return <TouchableOpacity {...args}>{AppIcon}</TouchableOpacity>;
}
export type VIconProps = {
  name: string;
  size?: number;
  color?: string;
  iconStyle?: any;
} & TextProps;
