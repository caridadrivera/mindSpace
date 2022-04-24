import { React } from 'react';
import { StatusBar } from 'expo-status-bar';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvKBENYNj5zNEVmwLZs_Xi49pYZck40EQ",
  authDomain: "mind-space-83dd7.firebaseapp.com",
  projectId: "mind-space-83dd7",
  storageBucket: "mind-space-83dd7.appspot.com",
  messagingSenderId: "128968071447",
  appId: "1:128968071447:web:50c543e97fa63f645d7f52",
  measurementId: "G-CCR04Y6N2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/authorization/Landing';
import Register from './components/authorization/Register';








const navStack = createStackNavigator();
export default function App() {
  return (
    //parent tag of every single route
    //initialroute tells app.js to display the landing page I passed in
    <NavigationContainer>
      <navStack.Navigator initialRouteName="Landing">
        <navStack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
        <navStack.Screen name="Register" component={Register}/>


      </navStack.Navigator>
    </NavigationContainer>
  );
}


