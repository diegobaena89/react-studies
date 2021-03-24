import React from 'react'
import Input from './Form/Input'
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <Radio options={['Azul', 'Vermelho']} value={cor}  setValue={setCor}/>
      <br />
      <Select options={['smartphone', 'notebook']} value={produto} setValue={setProduto}/>
      <br />
      <Input id="nome" label="Nome" value={nome} setValue={setNome}/>
      <br />
      <Input id="email" label="E-mail" value={email} setValue={setEmail} require />
      <br />
      <button>Enviar</button>
    </form>
  )
}

export default App
