import './Input.css';
import React, { useState } from 'react';

export default (props) => {
  const [valor, setValor] = useState('Inicial');

  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input value={valor} onChange={quandoMudar} />{' '}
        {/* Com estado vinculado, responde às mudanças por conta do onChange */}
        <input value={valor} readOnly /> {/* Apenas leitura */}
        <input value={undefined} /> {/* Não há vinculação com nenhum estado*/}
      </div>
    </div>
  );
};
