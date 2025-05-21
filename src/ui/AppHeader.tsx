import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {HeaderProps} from './types';
import {Palette} from './colors';
import {HEADER_HEIGHT, STATUSBAR_HEIGHT} from '@src/utils';

const AppHeader: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightIcons = [],
  leftIcons = [],
  backgroundColor = Palette.white,
  titleStyle,
  headerStyle,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}]}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={
          backgroundColor === Palette.white ? 'dark-content' : 'light-content'
        }
      />
      <View style={[styles.header, headerStyle]}>
        <View style={styles.leftContainer}>
          {showBackButton && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBackPress}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              {/* Simple text arrow - replace with your own back icon component */}
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
          )}
          {leftIcons.map((item, index) => (
            <TouchableOpacity
              key={`left-icon-${index}`}
              style={styles.iconButton}
              onPress={item.onPress}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              {item.icon}
            </TouchableOpacity>
          ))}
        </View>

        {title && (
          <View style={styles.titleContainer}>
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>
              {title}
            </Text>
          </View>
        )}

        <View style={styles.rightContainer}>
          {rightIcons.map((item, index) => (
            <TouchableOpacity
              key={`right-icon-${index}`}
              style={styles.iconButton}
              onPress={item.onPress}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              {item.icon}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
  },
  header: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    marginRight: 5,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '400',
  },
  iconButton: {
    marginHorizontal: 5,
  },
});

export default AppHeader;
