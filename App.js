import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import Routes from './Src/Routes';
import {StackNavigator} from 'react-navigation';
import LoginPage from './Src/Controllers/LoginPage';
import SignUp from './Src/Controllers/SignUp';
import TabPage from './Src/Controllers/TabPage';
const Application = StackNavigator({
  LoginPage: { screen: LoginPage },
  SignUp: { screen: SignUp },
  TabPage: { screen: TabPage }

},{
  initialRouteName:'LoginPage',
    navigationOptions: {
      header : false,
    }

});
export default class App extends Component {



  render() {
    return (
    <View style = {styles.container}>
    <StatusBar
    backgroundColor="#1c313a"
           barStyle="light-content"
         />
    <Application/>
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
