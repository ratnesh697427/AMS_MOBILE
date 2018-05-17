import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  row,
  Button,
  TouchableOpacity,
  Image,

} from 'react-native';
import { Icon } from 'react-native-elements';
import { AppRegistry } from 'react-native';
import Routes from '../Routes';
import { TabNavigator , Navigation} from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import AssetDetails from '../Controllers/AssetDetails';
import AddAsset from '../Controllers/AddAsset';
import AddButton from '../View/AddButton';
export default class AssetController extends Component {

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
         onPress={() => navigation.navigate('AddAsset')}
         title="Add"
         color="#000000"
        />
        ),
        headerLeft: (
          <Button
           onPress={() => navigation.navigate('AddAsset')}
           title="Edit"
           color="#000000"
          />

      ),
      /* the rest of this config is unchanged */
    };
  };



   renderItem = ({ item }) => {
      const { navigate } = this.props.navigation;
      if(item.status == "In Use"){
     return(
       <View style={{marginBottom:0,paddingEnd:10,borderBottomWidth: 2,borderColor:"#CED0CE",width:'100%',marginLeft:'auto', marginRight:'auto',backgroundColor:'#ebffea'}}>
       <TouchableOpacity style={{ flex: 1, flexDirection: 'row',  }} onPress={() => navigate('AssetDetails')}>
        <Image style={{ height: 100, width: 100, borderRadius:50,marginLeft:20}}
           source={require('../Images/ram.png')} />
      <View style={{ flex: 1, justifyContent: 'center', marginLeft:30}} >
         <Text style={{ fontSize: 14 ,textAlign:'left',fontFamily: 'Arial',color:'#666'}}>
         Name : {item.name}
         </Text>


          <Text style={{ fontSize: 13,textAlign:'left', fontFamily:'Helvetica', color:'#333'}}>
          Type : {item.type}
          </Text>


          <Text style={{ fontSize: 13, color: '#222'}}>
          Location : item.location}
          </Text>
          <Text style={{fontSize:13,color:'#222'}}>
          Status : {item.status}
          </Text>
      </View>
</TouchableOpacity>
</View>
)}

else if(item.status == "Needs Service"){

  return(
    <View style={{marginBottom:0,paddingEnd:10,borderBottomWidth: 2,borderColor:"#CED0CE",width:'100%',marginLeft:'auto', marginRight:'auto',backgroundColor:'#fffcea'}}>
    <TouchableOpacity style={{ flex: 1, flexDirection: 'row',  }} onPress={() => navigate('AssetDetails')}>
     <Image style={{ height: 100, width: 100, borderRadius:50,marginLeft:20}}
        source={require('../Images/ram.png')} />
   <View style={{ flex: 1, justifyContent: 'center', marginLeft:30}} >
      <Text style={{ fontSize: 14 ,textAlign:'left',fontFamily: 'Arial',color:'#666'}}>
      Name : {item.name}
      </Text>


       <Text style={{ fontSize: 13,textAlign:'left', fontFamily:'Helvetica', color:'#333'}}>
       Type : {item.type}
       </Text>


       <Text style={{ fontSize: 13, color: '#222'}}>
       Location : item.location}
       </Text>
       <Text style={{fontSize:13,color:'#222'}}>
       Status : {item.status}
       </Text>
   </View>
</TouchableOpacity>
</View>
)
}
else{
  return(
    <View style={{marginBottom:0,paddingEnd:10,borderBottomWidth: 2,borderColor:"#CED0CE",width:'100%',marginLeft:'auto', marginRight:'auto',backgroundColor:'#ffeaea'}}>
    <TouchableOpacity style={{ flex: 1, flexDirection: 'row',  }} onPress={() => navigate('AssetDetails')}>
     <Image style={{ height: 100, width: 100, borderRadius:50,marginLeft:20}}
        source={require('../Images/ram.png')} />
   <View style={{ flex: 1, justifyContent: 'center', marginLeft:30}} >
      <Text style={{ fontSize: 14 ,textAlign:'left',fontFamily: 'Arial',color:'#666'}}>
      Name : {item.name}
      </Text>


       <Text style={{ fontSize: 13,textAlign:'left', fontFamily:'Helvetica', color:'#333'}}>
       Type : {item.type}
       </Text>


       <Text style={{ fontSize: 13, color: '#222'}}>
       Location : item.location}
       </Text>
       <Text style={{fontSize:13,color:'#222'}}>
       Status : {item.status}
       </Text>
   </View>
</TouchableOpacity>
</View>
)
}
   }
   renderSeparator = () => {
  return (
    <View
      style={{
        width: '86%',
        backgroundColor: '#0000ff',
        height:200
      }}
    />
  );
};



   componentDidMount() {
      fetch('http://167.99.192.42:8090/assets')
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
      <View style={styles.assetcontainer} >

      <FlatList
       data={this.state.dataSource}
       renderItem={this.renderItem}
       keyExtractor= {(item, index) => index}
       ItemSeperatorComponent= {this.renderSeperator}
      />
    			</View>
  			)
  	}
  }

  const styles = StyleSheet.create({
    assetcontainer : {
      flex: 1,
      backgroundColor:'#f3f3f3',
    },

  });
