import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Upload from './src/Upload';
import UploadDetail from './src/upload-detail';

const Stack = createStackNavigator();

const rootApp = () => (
  <Stack.Navigator
    headerMode="float"
    initialRouteName="Upload"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Upload" component={Upload} />
    <Stack.Screen name="UploadDetail" component={UploadDetail} />
  </Stack.Navigator>
);
export default function App() {
  return <NavigationContainer>{rootApp()}</NavigationContainer>;
}
