import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Routes from '../Routes';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
export default class TabPage extends Component {





  render() {
    return (

        <Routes/>


  			)
  	}
  }
  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

    }
  }
  );
