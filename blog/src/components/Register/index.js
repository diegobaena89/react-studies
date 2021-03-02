import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';

import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      password: '',
    };
    this.register = this.register.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  register(e) {
    e.preventDefault();

    this.onRegister();
  }

  onRegister = async () => {
    try {
      const { nome, email, password } = this.state;

      await firebase.register(nome, email, password);
      this.props.history.replace('dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <div>
        <h1 className="register-h1">Novo Usuário</h1>
        <form onSubmit={this.register} id="register">
          <label>Nome:</label>
          <br />
          <input
            type="text"
            value={this.state.nome}
            placeholder="Digite seu nome"
            autoFocus
            autoComplete="off"
            onVolumeChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br />
          <label>E-mail:</label>
          <br />
          <input
            type="text"
            value={this.state.email}
            autoComplete="off"
            placeholder="teste@teste.com"
            onVolumeChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <label>Senha:</label>
          <br />
          <input
            type="text"
            value={this.state.password}
            autoComplete="off"
            placeholder="Digite sua senha"
            onVolumeChange={(e) => this.setState({ password: e.target.value })}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Register);
