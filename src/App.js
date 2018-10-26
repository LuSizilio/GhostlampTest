import React, { Component } from 'react';
import './App.css';
import Registro from './Registro';
import Register from './Register';
import Login from './Login';
import Erro404 from './404'
import Shows from './Shows'
import 'antd/dist/antd.css';
import * as firebase from 'firebase';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

var config = {
  apiKey: "AIzaSyC7oSNS7N1PXFYlS69XBI0GHP0lwQJmLJQ",
  authDomain: "ghostlampstest-4346e.firebaseapp.com",
  databaseURL: "https://ghostlampstest-4346e.firebaseio.com",
  projectId: "ghostlampstest-4346e",
  storageBucket: "ghostlampstest-4346e.appspot.com",
  messagingSenderId: "890084251111"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
  }else{
    console.log('Not logged in');
  }
});

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Shows} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/teste" component={Registro} />
            <Route path="*" component={Erro404} />
            {/*  */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
