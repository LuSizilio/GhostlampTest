import React, { Component } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';
import './App.css';

class Registro extends Component {
  state={
    repos: null
  }

  getUser = (e) =>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      axios.get(`http://localhost:3001/usuarios/${user}`)
      .then((res) => {
        console.log(res);
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
            <Link to="/Registro">Ir para a página sobre \o/</Link>
            { this.state.repos ? <p>Numero de repositorios: {this.state.repos}</p>:<p>Digite um usuário</p> }
      </div>
    );
  }
}

export default Registro;
