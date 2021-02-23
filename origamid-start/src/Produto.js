import React from 'react';
import { GlobalContext, GlobalStorage } from './GlobalContext';

const Produto = () => {
  const Global = React.useContext(GlobalContext);
  if (Global.dados === null) return null;
  return (
    <div>
      Produto:{' '}
      {Global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};
export default Produto;
