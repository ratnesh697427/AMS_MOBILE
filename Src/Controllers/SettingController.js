import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,

} from 'react-native';


import { Actions } from 'react-native-router-flux';
export default class SettingController extends Component {



  render() {

    return (
      <View style={styles.assetcontainer}>
      <Text style={styles.assetcontainer_text}>AMS</Text>
            <Text>Create Asset</Text>
    			</View>
  			)
  	}
  }

  const styles = StyleSheet.create({
    assetcontainer : {
      flexGrow: 1,
      backgroundColor:'#ffffff',
      //justifyContent:'flex-end',
      alignItems: 'center',
    },
    assetcontainer_text : {
      marginVertical: 15,
      fontSize:18,
      marginTop:'10%',
      color:'rgba(255, 255, 255, 0.7)'
    }
  });
