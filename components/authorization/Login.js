import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

export class Login extends Component {
     constructor(props){
         super(props);

         this.state = {
            name: '',
             email: '',
             password: ''
         }
         this.onSignUp = this.onSignIn.bind(this);
     }//end of constructor

     onSignIn(){
        const {email, password} = this.state;
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
          .then((response) =>{
            console.log(response);
          })

          .catch((error) => {
          console.log(error.message)
          })
     }//end of onSignIn


  
  render() {
    return (
      <View>
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
            onPress={() => this.onSignIn()}
            title="Sign In"
            />
        </View>
    )
  }
}

export default Login