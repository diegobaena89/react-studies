import React from 'react';
import ButtonModal from './ButtonModal';
import { Modal } from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo;
  });
  const [items, setItems] = React.useState('Teste');

  function handleClick() {
    setItems('Outro');
  }
  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Clicar</button>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
