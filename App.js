import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createBottomTagNavigator} from 'react-navigation-tabs';
import {ScanScreen} from './screens/ScanScreen'

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const tagNavigator = createBottomTagNavigator({
  ScanScreen: ScanScreen
})
const AppContainer = createAppContainer(tagNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});