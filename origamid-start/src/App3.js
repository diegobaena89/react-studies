import React from 'react';
import { Home } from './form/Home';
import { Produtos } from './form/Produtos';
import { Header } from './Header';

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};
export default App;
