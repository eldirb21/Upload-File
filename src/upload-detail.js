import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppBar from './components/app-bar';

const {height, width} = Dimensions.get('window');
export default function UploadDetail(props) {
  const navigation = useNavigation();
  var img = props.route.params || 'base64';
  return (
    <ScrollView>
      <View style={styles.container}>
        <AppBar
          isBackable
          containerStyle={styles.appbar}
          onPress={() => navigation.goBack()}
        />
        <Image
          style={{height: height, width: width}}
          source={{uri: 'data:image/png;base64,' + img}}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    zIndex: 99,
  },
});
