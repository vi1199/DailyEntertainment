import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  ImageResizeMode,
} from 'react-native';
import {CustomImageProps} from '../types';
import {Colors} from '../colors';

// Simplified props with only the most essential options

const VImage: React.FC<CustomImageProps> = ({
  source,
  style = {},
  fallback,
  placeholder,
  resizeMode = 'cover',
  onPress,
  caption,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageSource = hasError && fallback ? fallback : source;

  const renderImage = () => (
    <View style={[styles.container, style]}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          {placeholder ? (
            <Image
              source={placeholder}
              style={styles.image}
              resizeMode={resizeMode}
            />
          ) : (
            <ActivityIndicator size="small" color={Colors.Neutral['500']} />
          )}
        </View>
      )}

      <Image
        source={imageSource}
        style={[styles.image, {display: isLoading ? 'none' : 'flex'}]}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        resizeMode={resizeMode}
      />
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {onPress ? (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          {renderImage()}
        </TouchableOpacity>
      ) : (
        renderImage()
      )}

      {caption && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  container: {
    width: '100%',
    height: 200,
    borderRadius: 0,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  caption: {
    padding: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default VImage;
