import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";

export class Register extends Component {
     constructor(props){
         super(props);

         this.state = {
             name: '',
             email: '',
             password: ''
         }
         this.onSignUp = this.onSignUp.bind(this);
     }//end of constructor

     onSignUp(){
      const {name, email, password} = this.state;

      const auth = getAuth();
      connectAuthEmulator(auth);
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) =>{
          console.log(response);
        })

        .catch((error) => {
         console.log(error.message)
        })

     }//end of onSignUp

  render() {
    return (
      <View>
          <TextInput
            placeholder="name"
            onChangeText={ (name)=> this.setState({name}) }
         />
         <TextInput
            placeholder="email"
            onChangeText={ (email)=> this.setState({email}) }
         />
        <TextInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={ (password)=> this.setState({password}) }
        />

            <Button
            onPress={() => this.onSignUp()}
            title="Sign Up"
            />
        </View>
    )
  }
}

export default Register