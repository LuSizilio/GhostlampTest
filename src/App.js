import React, { Component } from 'react';
import './App.css';
import Registro from './Registro';
import Erro404 from './404'
import Menu from './components/App'
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Menu} />
            <Route path="/registro" component={Registro} />
            <Route path="*" component={Erro404} />
            {/*  */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
