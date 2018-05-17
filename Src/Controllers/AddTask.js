import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,


} from 'react-native';
import Routes from '../Routes';
import AssetForm from '../View/AssetForm';

//import FilePicker from 'react-native-file-picker';
import { Actions } from 'react-native-router-flux';
var ImagePicker = require('react-native-image-picker');


var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
export default class AddTask extends Component {

  render() {

    return (

      <ScrollView>
      <AssetForm/>
      <TouchableOpacity style={styles.signupButton} onPress={this.show}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      </ScrollView>


  			)
  	}
    show(){
    ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };

    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source
    });
  }
});
}
  }

  const styles = StyleSheet.create({
    container : {
  //    backgroundColor: '#ffffff',
      backgroundColor:'#f7f7f7',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

    },
    signupButton: {
      marginVertical: 40,
      color:'#000000',
      fontSize:16,
      fontWeight:'500'
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#000000',
      textAlign:'center'
    },

  });
