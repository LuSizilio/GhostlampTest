import React, { Component } from 'react';
import './App.css';
import Registro from './Registro';
import Register from './Register';
import Login from './Login';
import Erro404 from './404'
import Shows from './Shows'
import 'antd/dist/antd.css';
import {firebase1} from './config/firebase';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


firebase1.auth().onAuthStateChanged(firebaseUser => {
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
