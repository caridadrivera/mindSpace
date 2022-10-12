import React, { Component } from 'react'
import{View, Text} from "react-native";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUser} from '../redux/actions/index'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import TopicsScreen from './main/Topics';
import ProfileScreen from './main/Profile';
import AddScreen from './main/Add';


const Tab = createMaterialBottomTabNavigator();
//doing this because this will be a separate screen eventually and for now I need an empty value
const EmptyScreen = () =>{
  return null;
}

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

  render() {

      return(
        <Tab.Navigator initialRouteName="Profile">

            <Tab.Screen name="Add New Entry" component={AddScreen} 
                listeners={({ navigation }) => ({
                  tabPress: event => {
                    event.preventDefault();
                    navigation.navigate("Add")
                  }
                })}
                
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="seed" color={color} size={26} />
                  ),
                }}
           />   


           <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="hexagon-outline" color={color} size={26} />
                  ),
           }}/>


            <Tab.Screen name="Topics" component={TopicsScreen} 
              options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="seed" color={color} size={26} />
              ),
            }}/>

      </Tab.Navigator>
      )
    }
}


const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);
export default connect(mapStateToProps, mapDispatchProps)(Main)