import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import CardUpload from './components/card-upload';
import {useNavigation} from '@react-navigation/native';
import AppBar from './components/app-bar';

const {height, width} = Dimensions.get('window');

export default function Upload() {
  const navigation = useNavigation();
  const [Items, setItems] = useState([]);
  const UploadFile = async () => {
    var options = {
      videoQuality: 'high',
      quality: 1,
      includeBase64: true,
      selectionLimit: 14,
    };
    const result = await launchImageLibrary(options);
    var imglist = result.assets.map(x => {
      return x.base64;
    });
    var newList = [...imglist, ...Items];
    setItems(newList);
  };
  const goViews = item => {
    navigation.navigate('UploadDetail', item);
  };
  return (
    <ScrollView>
      <AppBar title="File Uploads" />
      <View style={styles.container}>
        <CardUpload isbtn onPress={UploadFile} />

        {Items.map((item, index) => (
          <CardUpload onPress={() => goViews(item)} key={index} source={item} />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
