import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  row,
  Image
} from 'react-native';
import Routes from '../Routes';
import {StackNavigator} from 'react-navigation';
import TaskDetails from '../Controllers/TaskDetails';
import { Actions } from 'react-native-router-flux';
import AddTask from '../Controllers/AddTask';
import AddButton from '../View/AddButton';
export default class TaskController extends Component {
   constructor(){
    super()
    this.state = {
      dataSource: []
    }
  }
  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};


   return {

     headerRight: (
       <Button
        onPress={() => navigation.navigate('AddTask')}
        title="Add"
        color="#000000"
       />
       ),
       headerLeft: (
         <Button
          onPress={() => navigation.navigate('AddTask')}
          title="Edit"
          color="#000000"
         />

     ),
     /* the rest of this config is unchanged */
   };
 };
  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;
    if(item.priority == "High"){
    return(
  <View style={{marginBottom:0,paddingEnd:10, flexDirection: 'row', borderBottomWidth: 2,borderColor:"#CED0CE",width:'100%',marginLeft:'auto', marginRight:'auto',backgroundColor:'#ffeaea'}}>
  <TouchableOpacity style={{ flex: 1, flexDirection: 'row'}}onPress={() => navigate('TaskDetails')}>
   <Image style={{ height: 100, width: 100, borderRadius:50,marginLeft:20}}
      source={require('../Images/ram.png')} />
  <View style={{ flex: 1, marginLeft:30}} >
    <Text style={{ fontSize: 14 ,textAlign:'left',fontFamily: 'Arial',color:'#666'}}>
     Name : {item.name}
    </Text>
     <Text style={{ fontSize: 13,textAlign:'left', fontFamily:'Helvetica', color:'#333'}}>
      Assigned To: {item.assignedTo}
     </Text>
     <Text style={{ fontSize: 13, color: '#222'}}>
      dueDate : {item.dueDate}
     </Text>
     <Text style={{fontSize:13,color:'#222'}}>
     Task Type : {item.taskType}
     </Text>
     <Text style={{fontSize:13,color:'#222'}}>
     Status : {item.status}
     </Text>
     <Text style={{fontSize:13,color:'#222'}}>
     priority : {item.priority}
     </Text>
  </View>
  </TouchableOpacity>
  </View>
    )
  }
  else{
    return(
  <View style={{marginBottom:0,paddingEnd:10, flexDirection: 'row', borderBottomWidth: 2,borderColor:"#CED0CE",width:'100%',marginLeft:'auto', marginRight:'auto',backgroundColor:'#ebffea'}}>
  <TouchableOpacity style={{ flex: 1, flexDirection: 'row'}}onPress={() => navigate('TaskDetails')}>
   <Image style={{ height: 100, width: 100, borderRadius:50,marginLeft:20}}
      source={require('../Images/ram.png')} />
  <View style={{ flex: 1, marginLeft:30}} >
    <Text style={{ fontSize: 14 ,textAlign:'left',fontFamily: 'Arial',color:'#666'}}>
     Name : {item.name}
    </Text>
     <Text style={{ fontSize: 13,textAlign:'left', fontFamily:'Helvetica', color:'#333'}}>
      Assigned To: {item.assignedTo}
     </Text>
     <Text style={{ fontSize: 13, color: '#222'}}>
      dueDate : {item.dueDate}
     </Text>
     <Text style={{fontSize:13,color:'#222'}}>
     Task Type : {item.taskType}
     </Text>
     <Text style={{fontSize:13,color:'#222'}}>
     Status : {item.status}
     </Text>
     <Text style={{fontSize:13,color:'#222'}}>
     priority : {item.priority}
     </Text>
  </View>
  </TouchableOpacity>
  </View>
    )
  }
  }



  componentDidMount() {
     fetch('http://167.99.192.42:8095/tasks')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson
      })
    })
    .catch((error) => {
      console.log(error)
    }
  )}





  render() {

   return (
     <View style={styles.assetcontainer}>
     <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
     />
         </View>
       )
   }
  }

  const styles = StyleSheet.create({
   assetcontainer : {
     flex: 1,
     backgroundColor:'#f5fcff',
     marginTop: 10,
     marginBottom: 10,

   },
  });
