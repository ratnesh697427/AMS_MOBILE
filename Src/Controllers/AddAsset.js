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
import { TabNavigator , Navigation} from 'react-navigation';
import MapPage from '../Controllers/MapPage';
import Routes from '../Routes';
import AssetForm from '../View/AssetForm';
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
export default class AddAsset extends Component {
  state = {
   file: undefined
 };
 selectFileTapped() {
    const options = {
      title: 'File Picker',
      chooseFileButtonTitle: 'Choose File...'
    };

    FilePickerManager.showFilePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          file: response
        });
      }
    });
  }
  render() {
    const { navigate } = this.props.navigation;

    return (

      <ScrollView>
      <AssetForm/>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigate('MapPage')}>
        <Text style={styles.buttonText}>click to add Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={this.show}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={this.selectFileTapped.bind(this)}>
			<Text style={styles.buttonText}>Choose file...</Text>
		</TouchableOpacity>
		<Text style={styles.fileInfo}>{JSON.stringify(this.state.file)}</Text>

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
      color:'#000000',
      textAlign:'center'
    },

  });
