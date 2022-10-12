import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { getAuth,signOut} from "firebase/auth";


export default function Profile(post) {



  //on submit of form, profile will be called after the post request has been made in the Add component
  //check if user has posts
  //by doing get request to posts/userid
  //if the return is not empty, render the return
  //if empty, do a create your first post 
console.log(post, 'is the post coming in');

  let hasPosts = false;
  if(post){
     hasPosts = true;
  } else {
    hasPosts = false;
  }
  const auth = getAuth();

  const logout = (auth) => {
    signOut(auth);
  };


if(hasPosts){
  return (
    <View style={{margin:50}}>
     
       <Text>
           IF YOU HAVE POSTS Your personal posts, will display with the 'relate button, comment and love'
       </Text>

       <Button
             onPress={() => logout(auth)}
             title="Log out"
             type="primary"
             color={'#208AEC'}
             size="large"
           />
   </View>
 )
}else {
  return (
    <View style={{margin:50}}>
     
       <Text>
           You have no entries yet :)
       </Text>

       <Button
             onPress={() => logout(auth)}
             title="Log out"
             type="primary"
             color={'#208AEC'}
             size="large"
           />
   </View>
 )
}
  



}
