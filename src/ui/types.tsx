import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightIcons?: Array<{
    icon: React.ReactNode;
    onPress: () => void;
  }>;
  leftIcons?: Array<{
    icon: React.ReactNode;
    onPress: () => void;
  }>;
  backgroundColor?: string;
  titleStyle?: TextStyle;
  headerStyle?: ViewStyle;
}

export interface CustomImageProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
  fallback?: ImageSourcePropType;
  placeholder?: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
  onPress?: () => void;
  caption?: string;
  children?: React.ReactNode;
}
