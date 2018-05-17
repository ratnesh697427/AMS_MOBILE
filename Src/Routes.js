import { TabNavigator , StackNavigator } from 'react-navigation';
import AssetController from '../Src/Controllers/AssetController';
import TaskController from '../Src/Controllers/TaskController';
import OverViewController from '../Src/Controllers/OverViewController';
import SettingController from '../Src/Controllers/SettingController';
import AssetDetails from '../Src/Controllers/AssetDetails';
import TaskDetails from '../Src/Controllers/TaskDetails';
import AddTask from '../Src/Controllers/AddTask';
import MapPage from '../Src/Controllers/MapPage';
import AddAsset from '../Src/Controllers/AddAsset';
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  Button,
  icon,
  TouchableOpacity
} from 'react-native';






export const AssetControllerStack = StackNavigator({
  AssetController: {
    screen: AssetController,

    },

  AssetDetails: {
    screen: AssetDetails,
    navigationOptions: {
      title: 'AssetDetail',
      tabBarVisible: false
    },
  },
  AddAsset: {
    screen: AddAsset,
    navigationOptions: {
      title: 'AddAsset',
    },

  },
  MapPage: {
    screen: MapPage,

    },


});
export const TaskControllerStack = StackNavigator({
  TaskController: {
    screen: TaskController,

  },
  TaskDetails: {
    screen: TaskDetails,
    navigationOptions: {
      title: 'TaskDetails',
      tabBarVisible: false
    },
  },
  AddTask: {
    screen: AddTask,
    navigationOptions: {
      title: 'AddTask',
    },

  },
});

export const  Tabs = TabNavigator({
	AssetController: {
		screen: AssetControllerStack,
    navigationOptions: {

        title: 'Asset',
        tabBarIcon: <Icon name="list" size={35}  />

    },
	},
	TaskController: {
		screen: TaskControllerStack,
    navigationOptions: {

        title: 'Task',
        tabBarIcon: <Icon name="rowing" size={35} />

    },
	},
  OverViewController: {
		screen: OverViewController,
    navigationOptions: {

        title: 'Overview',
        tabBarIcon:  <Icon name="home" size={35} />

    },
	},
  SettingController: {
		screen: SettingController,
    navigationOptions: {

        title: 'Settings',
        tabBarIcon: <Icon name="settings" size={35} />

    },
	},

});

export default class Routes extends Component {
  render() {

    return (
  <Tabs/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
