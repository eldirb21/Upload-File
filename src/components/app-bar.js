import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function AppBar(props) {
  const {title, isBackable, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity activeOpacity={0.9} {...props} style={styles.isBack}>
        {isBackable && (
          <Image
            resizeMode="cover"
            style={styles.isBack_icon}
            source={require('../assets/ios-arrow.png')}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{title || 'File Detail'}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
  },
  isBack: {
    padding: 5,
    borderRadius: 100,
    marginRight: 4,
  },
  isBack_icon: {
    height: 18,
    width: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
});
