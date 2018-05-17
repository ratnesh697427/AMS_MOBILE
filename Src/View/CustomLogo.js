import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image
} from 'react-native';


import { Actions } from 'react-native-router-flux';
export default class CustomLogo extends Component {



  render() {
  
    return (
      <View style={styles.container}>
      <Image  style={{width:100, height: 90}} source={require('../Images/logo.png')}/>
      <Text>AMS 2.0</Text>
    			</View>
  			)
  	}
  }

  const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems: 'center'
    },
    logoText : {
    	marginVertical: 15,
    	fontSize:18,
    	color:'rgba(255, 255, 255, 0.7)'
    }
  });
