import React, {Component} from 'react';
import{View, Text} from "react-native";
import { Form, FormItem} from 'react-native-form-component';

import firebase from 'firebase/compat/app';
import firestore from 'react-native-firebase/firestore';

export class Add extends Component {

constructor(props){ 
  super(props);
  this.state = {
    topic: '',
    message: ''
  }
  this.handleTopicChange = this.handleTopicChange.bind(this)
  this.handleMessageChange = this.handleMessageChange.bind(this)
  this.handleFormSubmission = this.handleFormSubmission.bind(this)

}


handleTopicChange(value){
  this.setState({
    topic: value

  })

}

handleMessageChange(value){
  this.setState({
    message: value

  })

}

handleFormSubmission(){
  //dopost request and await response. make async function 

  firestore()
  .collection('posts')
  .add({
    comments: '',
    message: this.state.message,
    relates: 0,
    topic: this.state.topic,
  })
  .then(() => {
    this.props.navigation.navigate("Profile", {topic: this.state.topic, message: this.state.message})

    console.log('Post added!');
  }, function errorFn(error){
    console.log('error girl', error)
  });
}


  render() {

    return (
    
      <Form onButtonPress={this.handleFormSubmission} 
       style={{ backgroundColor: 'yellow'}}
       buttonStyle = {{ backgroundColor: 'blue', margin:10}}
      >
        <FormItem
          label="Topic"
          placeholder="Topic"
          style={{margin: 10}}
          onChangeText={this.handleTopicChange}
          value={this.state.topic}
          asterik />
        
        <FormItem
          textArea
          style={{height: 500, margin: 10}}
          placeholder="Pour your heart out"
          value={this.state.message}
          onChangeText={this.handleMessageChange}
          />     
      </Form >

)
  }
 
}
export default Add
