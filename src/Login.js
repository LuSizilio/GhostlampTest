import React, { Component } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';
import LoginField from './components/Login';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <h1>Do you have an account? Log-in!</h1>
        <LoginField/>
      </div>
    );
  }
}

export default Login;
