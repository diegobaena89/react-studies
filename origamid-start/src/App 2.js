import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';

const App = () => {
  return (
    <>
      <Header />
      <p>Preencha o formulário abaixo:</p>
      <Form />
      <Footer />
    </>
  );
};

export default App;
