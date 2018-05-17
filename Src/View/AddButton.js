import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  row,
  TouchableOpacity,
  Image,

} from 'react-native';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import AddAsset from '../Controllers/AddAsset';
import { Icon } from 'react-native-elements';
export default class AddButton extends React.Component {


    render() {
        return (
            <View>

                <TouchableOpacity onPress={() => this.props.navigate('AddAsset')}>
                    <Icon name="add" size={35}/>

                </TouchableOpacity>
            </View>
        )
    }
}
