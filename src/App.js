import React, { Component } from 'react';
import './App.css';
import Registro from './Registro';
import Erro404 from './404';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Registro} />
            <Route path="/registro" component={Erro404} />
            {/*  */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
