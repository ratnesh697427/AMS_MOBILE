import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  Form,
  TouchableHighlight
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class AssetDetails extends Component {





  render() {

    return (

      <ScrollView>
      <Image style={styles.imgcontainer}
         source={require('../Images/ram.png')} />
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
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor = "#555"
                selectionColor="#555"
                onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                     underlineColorAndroid='rgba(0,0,0,0)'
                     placeholder="Asset Name"
                     underlineColorAndroid='rgba(0,0,0,0)'
                     placeholderTextColor = "#555"
                     selectionColor="#555"
                     onSubmitEditing={()=> this.password.focus()}
                     />
                     <TextInput style={styles.inputBox}
                          underlineColorAndroid='rgba(0,0,0,0)'
                          placeholder="Make"
                          underlineColorAndroid='rgba(0,0,0,0)'
                          placeholderTextColor = "#555"
                          selectionColor="#555"
                          onSubmitEditing={()=> this.password.focus()}
                          />
                          <TextInput style={styles.inputBox}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="Model"
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholderTextColor = "#555"
                               selectionColor="#555"
                               onSubmitEditing={()=> this.password.focus()}
                               />
                               <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Color"
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholderTextColor = "#555"
                                    selectionColor="#555"
                                    onSubmitEditing={()=> this.password.focus()}
                                    />
                                    <TextInput style={styles.inputBox}
                                         underlineColorAndroid='rgba(0,0,0,0)'
                                         placeholder="Owner"
                                         underlineColorAndroid='rgba(0,0,0,0)'
                                         placeholderTextColor = "#555"
                                         selectionColor="#555"
                                         onSubmitEditing={()=> this.password.focus()}
                                         />
                                         <TextInput style={styles.inputBox}
                                              underlineColorAndroid='rgba(0,0,0,0)'
                                              placeholder="Location"
                                              underlineColorAndroid='rgba(0,0,0,0)'
                                              placeholderTextColor = "#555"
                                              selectionColor="#555"
                                              onSubmitEditing={()=> this.password.focus()}
                                              />
                <TextInput style={styles.inputBox}
                     underlineColorAndroid='rgba(0,0,0,0)'
                     placeholder="Sub division"
                     underlineColorAndroid='rgba(0,0,0,0)'
                     placeholderTextColor = "#555"
                     selectionColor="#555"
                     onSubmitEditing={()=> this.password.focus()}
                   />
              <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Start Date"
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholderTextColor = "#555"
                      selectionColor="#555"
                      onSubmitEditing={()=> this.password.focus()}
                      />

                      <TextInput style={styles.inputBox}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder="Start Date"
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholderTextColor = "#555"
                              selectionColor="#555"
                              onSubmitEditing={()=> this.password.focus()}
                              />
                              <TextInput style={styles.inputBox}
                                      underlineColorAndroid='rgba(0,0,0,0)'
                                      placeholder="Asset Type"
                                      underlineColorAndroid='rgba(0,0,0,0)'
                                      placeholderTextColor = "#555"
                                      selectionColor="#555"
                                      onSubmitEditing={()=> this.password.focus()}
                                      />
                                      <TextInput style={styles.inputBox}
                                              underlineColorAndroid='rgba(0,0,0,0)'
                                              placeholder="Asset Status"
                                              underlineColorAndroid='rgba(0,0,0,0)'
                                              placeholderTextColor = "#555"
                                              selectionColor="#555"
                                              onSubmitEditing={()=> this.password.focus()}
                                              />
                                    <TextInput style={styles.inputBox}
                                              underlineColorAndroid='rgba(0,0,0,0)'
                                              placeholder="Comments"
                                              underlineColorAndroid='rgba(0,0,0,0)'
                                              placeholderTextColor = "#555"
                                              selectionColor="#555"
                                              onSubmitEditing={()=> this.password.focus()}
                                              />

      </ScrollView>
                         )
         }
  };
  var styles = StyleSheet.create({
    imgcontainer: { height: 128, width: 128,borderRadius:64,marginLeft:'auto',marginRight:'auto'},
    container: {
      flexDirection: 'column',
      marginLeft:'auto',
      marginRight:'auto',
      flex: 1,
      marginTop:30
    },
    inputBox: {
      width:300,
      height:34,
      //backgroundColor:'#a4d3ee',
      letterSpacing:5,
      borderRadius: 1,
      borderLeftWidth: 0,
      borderTopWidth:0,
      borderRightWidth:0,
      paddingHorizontal:16,
      fontSize:16,
      fontWeight: 'bold',
      marginVertical: 10,

      // Temp code by KP started

      borderColor: '#ccc',
      borderWidth:1,
       fontFamily: 'Helvetica'
      // Temp code by Kp Ended
    }
  });
