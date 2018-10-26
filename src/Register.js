import React, { Component } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';
import RegisterField from './components/Register';
import './App.css';

class Register extends Component {
  render() {
    return (
      <div className="App">
        <h1>Create a new account!</h1>
        <RegisterField teste='createUserWithEmailAndPassword'/>
      </div>
    );
  }
}

export default Register;
