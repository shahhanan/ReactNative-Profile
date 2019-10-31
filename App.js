import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from "react-redux"
import configureStore from "./Store/CreateStore";
import FlashMessage from "react-native-flash-message";
const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
      <View style={styles.container}>
         <AppNavigator />  
         <FlashMessage position="top" />    
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
