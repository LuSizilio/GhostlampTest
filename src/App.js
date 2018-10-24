import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './UserForm';
import { Link } from 'react-router-dom'

class App extends Component {
  state={
    repos: null
  }

  getUser = (e) =>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({repos: repos});
    });
    }else{
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Teste</h1>
        <UserForm getUser={this.getUser}/>
        { this.state.repos ? <p>Numero de repositorios: {this.state.repos}</p>:<p>Digite um usuário</p> }
      </div>
    );
  }
}

export default App;
