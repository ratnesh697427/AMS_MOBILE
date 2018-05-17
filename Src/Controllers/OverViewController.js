import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,


} from 'react-native';
import Routes from '../Routes';
import AssetForm from '../View/AssetForm';
import FilePicker from '../Controllers/FilePicker';
import { Actions } from 'react-native-router-flux';
export default class OverViewController extends Component {

  render() {

    return (

      <View>

      </View>

)

  	}

  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },

  });
