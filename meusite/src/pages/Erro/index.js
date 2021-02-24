import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component {
  render() {
    return (
      <div>
        <h2>Ops, página não encontrada</h2>
        <h3>Você está procurando por:</h3>
        <Link to="/home">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
}

export default Erro;
