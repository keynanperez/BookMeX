/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {registerRootComponent} from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import AppNavigator from './src/navigations/Navigator';


class App extends React.Component {
  render() {
    return (<AppNavigator/>);
  }
}

registerRootComponent(App);


