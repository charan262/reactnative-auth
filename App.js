import React,{Component} from 'react';
import {Text, View,AppRegistry } from 'react-native';
import firebase from 'firebase';
import {Header,Button} from './components/src/common';
import LoginForm from './components/src/LoginForm';

export default class LotsOfGreetings extends Component {
  state={loggedIn:false}
    componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyCzQXGw3TLRnDFCKPD0tGdfbRp76QFrXro',
    authDomain: 'auth-21e51.firebaseapp.com',
    databaseURL: "https://auth-21e51.firebaseio.com",
    projectId: "auth-21e51",
    storageBucket: "auth-21e51.appspot.com",
    messagingSenderId: "130088360695"
  });
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      this.setState({loggedIn:true})
    }else{
      this.setState({loggedIn:false})
    }
  })
    }
    renderContent(){
    switch(this.state.loggedIn){
      case true:
      return( 
      <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
      )
      case false:
      return <LoginForm/>
      default:
      return <Spinner size="large"/>
    }
    }
    
  render() {
    return (
      <View>
          <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);