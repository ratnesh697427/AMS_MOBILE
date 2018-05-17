import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import { Icon } from 'react-native-elements';
export default class AssetForm extends Component {

	render(){

		return(

			<View style={styles.container}>

         <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Asset Number"
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholderTextColor = "#555"
              selectionColor="#555"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="RFID Number"
              secureTextEntry={true}
              placeholderTextColor = "#555"
              ref={(input) => this.password = input}
              />
            <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Serial Number"
                  placeholderTextColor = "#555"
                  selectionColor="#555"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
                  />
                  <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Asset Name"
                      placeholderTextColor = "#555"
                      selectionColor="#555"
                      keyboardType="email-address"
                      onSubmitEditing={()=> this.password.focus()}
                      />
                      <TextInput style={styles.inputBox}
                          underlineColorAndroid='rgba(0,0,0,0)'
                          placeholder="Make"
                          placeholderTextColor = "#555"
                          selectionColor="#555"
                          keyboardType="email-address"
                          onSubmitEditing={()=> this.password.focus()}
                          />
                          <TextInput style={styles.inputBox}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder="Model"
                              placeholderTextColor = "#555"
                              selectionColor="#555"
                              keyboardType="email-address"
                              onSubmitEditing={()=> this.password.focus()}
                              />
                              <TextInput style={styles.inputBox}
                                  underlineColorAndroid='rgba(0,0,0,0)'
                                  placeholder="Colour"
                                  placeholderTextColor = "#555"
                                  selectionColor="#555"
                                  keyboardType="email-address"
                                  onSubmitEditing={()=> this.password.focus()}
                                  />

                                  <TextInput style={styles.inputBox}
                                      underlineColorAndroid='rgba(0,0,0,0)'
                                      placeholder="Owner"
                                      placeholderTextColor = "#555"
                                      selectionColor="#555"
                                      keyboardType="email-address"
                                      onSubmitEditing={()=> this.password.focus()}
                                      />


                                  <View style={styles.containerInline}>
                                  <Text style={styles.textcssleft}>Add Photo</Text>
                                  <Text style={styles.textcssright}>Photo Icon</Text>
                                  </View>
                                  <View style={styles.containerInline}>
                                  <Text style={styles.textcssleft}>Add Photo</Text>
                                  <Text style={styles.textcssright}>Photo Icon</Text>
                                  </View>

  		</View>
			)
	}


  }



const styles = StyleSheet.create({
  containerInline : {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:'2%',
  },container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    color: '#555',
    marginTop:'10%'
  },

  inputBox: {
    width:300,
    height:34,
    //backgroundColor:'#a4d3ee',
    letterSpacing:5,
    borderRadius: 1,
    paddingHorizontal:16,
    fontSize:16,
    fontWeight: 'bold',
    marginVertical: 10,

    // Temp code by KP started

    borderColor: '#ccc',
    borderWidth:1,
     fontFamily: 'Helvetica'
    // Temp code by Kp Ended
  },
  button: {
    width:300,
    height:20,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    height:20,
    color:'#ffffff',
    textAlign:'center'
  },

  textcssright: {

    letterSpacing:1,
    marginLeft:120,
    fontWeight: 'bold',

  },

  textcssleft: {

    textAlign:'left'
  },
  textheader: {
    flexDirection: 'row',
    letterSpacing:1,
    fontSize:17,
    alignSelf: 'stretch'
  },
});
