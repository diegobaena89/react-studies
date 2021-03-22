import React from 'react'

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event){
    event.preventDefault(); // previne o padrão do submit
    console.log(event)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input 
      id="nome"
      name="nome"
      type="text" 
      value={nome} 
      onChange={(event) => setNome(event.target.value)} />

      <label htmlFor="email">E-mail:</label>
      <input 
      id="email"
      name="email"
      type="email" 
      value={email} 
      onChange={(event) => setEmail(event.target.value)} />
      
      <button>Enviar</button>
    </form>
  )
}

export default App
