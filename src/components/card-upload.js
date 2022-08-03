import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function CardUpload(props) {
  const {isbtn, source} = props;

  return (
    <View>
      {isbtn ? (
        <TouchableOpacity
          style={[styles.card, styles.shadow]}
          activeOpacity={0.92}
          {...props}
        >
          <View style={styles.shadowImg}>
            <Image
              resizeMode="cover"
              style={styles.icon}
              source={require('../assets/icon-plus.png')}
            />
          </View>
          <Text style={styles.label}>Add File</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity {...props} style={[styles.card, styles.shadow]}>
          <View style={styles.shadowImg}>
            <Image
              resizeMode="cover"
              style={styles.img}
              source={{uri: 'data:image/png;base64,' + source}}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  shadowImg: {
    backgroundColor: '#FFF',
    elevation: 6,
    borderRadius: 100,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
  },
  card: {
    backgroundColor: '#BEBEBE', // '#FAFAFA',
    padding: 20,
    paddingVertical: 40,
    marginBottom: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    height: 110,
    width: 110,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  label: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 4,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 100,
  },
});
