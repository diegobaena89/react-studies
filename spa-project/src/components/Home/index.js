import React from 'react';
import Contato from '../Contato';
import Inicio from '../Inicio';
import Sobre from '../Sobre';
import '../../styled.css';

function Home() {
  return (
    <div>
      <Inicio />
      <Sobre />
      <Contato />
    </div>
  );
}

export default Home;
