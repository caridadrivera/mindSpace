import React, { Component } from "react";
import{View, Text} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Provider} from 'react-redux'
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

import firebase from 'firebase/compat/app';
import {getFirestore,collection,getDocs} from 'firebase/firestore'
import AddScreen from './components/main/Add';
import SaveScreen from './components/main/Save';


const firebaseConfig = {
  apiKey: "AIzaSyBvKBENYNj5zNEVmwLZs_Xi49pYZck40EQ",
  authDomain: "mind-space-83dd7.firebaseapp.com",
  projectId: "mind-space-83dd7",
  storageBucket: "mind-space-83dd7.appspot.com",
  messagingSenderId: "128968071447",
  appId: "1:128968071447:web:50c543e97fa63f645d7f52",
  measurementId: "G-CCR04Y6N2Q"
};
const app = firebase.initializeApp(firebaseConfig);
const store = createStore(rootReducer, applyMiddleware(thunk))


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/authorization/Landing';
import Register from './components/authorization/Register';
import Login from './components/authorization/Login';

import MainScreen, { Main } from './components/Main';




const navStack = createStackNavigator();
const auth = getAuth(app);


export class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       loaded: false,
     }
   }

   componentDidMount(){
      onAuthStateChanged( auth, (user) => {
       if(!user){
         this.setState({
          loggedIn: false, 
          loaded: true, 
         })
       } else{
         
          this.setState({
           loggedIn: true, 
           loaded: true, 
          })
      
       }
     })
   } //end of component did mount
   

  render() {
    const {loggedIn, loaded} = this.state;

    if(!loaded){
      return(
        <View>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
          <navStack.Navigator initialRouteName="Landing">
            <navStack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
            <navStack.Screen name="Register" component={Register}/>
            <navStack.Screen name="Login" component={Login}/>
          </navStack.Navigator>
        </NavigationContainer>
      )

 
    }

    return(
      //must use Provider as parent component in order to have access to redux
      <Provider store={store}>
        <NavigationContainer>
          <navStack.Navigator initialRouteName="Main">
              <navStack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
              <navStack.Screen name="Add" component={AddScreen} navigation={this.props.navigation}/>  
              <navStack.Screen name="Save" component={SaveScreen}/>        

            </navStack.Navigator>
        </NavigationContainer>
      </Provider>
    )

    
  }
}

export default App





