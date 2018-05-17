import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import CustomLogo from '../View/CustomLogo';
import Form from '../View/Form';
import TabPage from '../Controllers/TabPage';
import {Actions} from 'react-native-router-flux';
<script src="http://localhost:8097"></script>


export default class LoginPage extends Component {



  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style = {styles.container}>
 <CustomLogo/>
  <Form type="Login"/>
  <TouchableOpacity  onPress={() => navigate('TabPage')} style={styles.button}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
  <View style={styles.signupTextCont}>

  <Text style={styles.signupText}> Dont hava an accout yet?></Text>

  <TouchableOpacity onPress={() => navigate('SignUp')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
    </View>
    </View>

  );
  }
}
const styles = StyleSheet.create({
  container : {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  signupTextCont : {
   flexGrow: 1,
   alignItems:'flex-end',
   justifyContent :'center',
   paddingVertical:16,
   flexDirection:'row'
 },
 signupText: {
   marginVertical:40,
   color:'rgba(255,255,255,0.6)',
   fontSize:16
 },
 signupButton: {
   marginVertical: 40,
   color:'#ffffff',
   fontSize:16,
   fontWeight:'500'
 },
 button: {
   width:300,
   backgroundColor:'#1c313a',
    borderRadius: 25,
     marginVertical: 10,
     paddingVertical: 13
 },
 buttonText: {
   fontSize:16,
   fontWeight:'500',
   color:'#ffffff',
   textAlign:'center'
 }
});
